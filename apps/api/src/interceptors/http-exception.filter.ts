import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from "@nestjs/common";
import { Response } from "express";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const exceptionResponse = exception.getResponse();

    let errorMessage = "An error occurred";
    if (typeof exceptionResponse === "string") {
      errorMessage = exceptionResponse;
    } else if (
      typeof exceptionResponse === "object" &&
      "message" in exceptionResponse
    ) {
      errorMessage = Array.isArray(exceptionResponse.message)
        ? exceptionResponse.message[0]
        : exceptionResponse.message;
    }

    response.status(status).json({
      data: null,
      error: {
        statusCode: status,
        message: errorMessage,
        timestamp: new Date().toISOString(),
      },
    });
  }
}
