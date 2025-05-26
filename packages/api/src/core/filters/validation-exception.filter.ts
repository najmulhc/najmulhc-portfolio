import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  BadRequestException,
} from '@nestjs/common';
import { Response } from 'express';
import { ValidationError } from 'class-validator';

@Catch(BadRequestException)
export class ValidationExceptionFilter implements ExceptionFilter {
  catch(exception: BadRequestException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();

    // Get validation errors from the exception
    const validationErrors = exception.getResponse()['message'];

    // Format validation errors into a more readable structure
    const formattedErrors = this.formatErrors(validationErrors);

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      errors: formattedErrors,
    });
  }

  private formatErrors(
    errors: string[] | ValidationError[],
  ): Record<string, string[]> {
    if (!Array.isArray(errors)) {
      return { general: [errors.toString()] };
    }

    // If errors are already strings, return them in a general errors array
    if (typeof errors[0] === 'string') {
      return { general: errors as string[] };
    }

    // Format class-validator errors into a more readable structure
    const formattedErrors: Record<string, string[]> = {};
    (errors as ValidationError[]).forEach((error) => {
      if (!formattedErrors[error.property]) {
        formattedErrors[error.property] = [];
      }
      if (error.constraints) {
        formattedErrors[error.property].push(
          ...Object.values(error.constraints),
        );
      }
    });

    return formattedErrors;
  }
}
