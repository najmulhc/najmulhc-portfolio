import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { ADMIN_KEY } from "../decorators/admin.decorator";

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const isAdmin = this.reflector.get<boolean>(
      ADMIN_KEY,
      context.getHandler()
    );

    if (!isAdmin) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      throw new UnauthorizedException("No authorization header found");
    }

    // Basic auth format: "Basic base64(username:password)"
    const [type, credentials] = authHeader.split(" ");

    if (type !== "Basic") {
      throw new UnauthorizedException("Invalid authentication type");
    }

    const [username, password] = Buffer.from(credentials, "base64")
      .toString("utf-8")
      .split(":");

    const isValidAdmin =
      username === (process.env.ADMIN_USERNAME || "admin") &&
      password === (process.env.ADMIN_PASSWORD || "admin");

    if (!isValidAdmin) {
      throw new UnauthorizedException("Invalid credentials");
    }

    return true;
  }
}
