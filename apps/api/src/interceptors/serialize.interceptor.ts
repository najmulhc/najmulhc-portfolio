import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  UseInterceptors,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { plainToInstance } from "class-transformer";

interface ClassConstructor {
  new (...args: any[]): {};
}

@Injectable()
export class SerializeInterceptor implements NestInterceptor {
  constructor(private dto: ClassConstructor) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data: any) => {
        // If the response follows our API standard format
        if (data && typeof data === "object" && "data" in data) {
          return {
            data: plainToInstance(this.dto, data.data, {
              excludeExtraneousValues: true,
            }),
            error: data.error,
          };
        }

        // If it's a direct response
        return plainToInstance(this.dto, data, {
          excludeExtraneousValues: true,
        });
      })
    );
  }
}

export const UseSerializeInterceptor = (dto: ClassConstructor) => {
  return UseInterceptors(new SerializeInterceptor(dto));
};
