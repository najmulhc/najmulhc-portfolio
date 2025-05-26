import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { classToPlain } from 'class-transformer';

@Injectable()
export class SerializerInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        // Handle arrays
        if (Array.isArray(data)) {
          return data.map((item) => this.transformResponse(item));
        }
        // Handle single objects
        return this.transformResponse(data);
      }),
    );
  }

  private transformResponse(data: any) {
    // Skip transformation for primitive types
    if (data === null || data === undefined || typeof data !== 'object') {
      return data;
    }

    // Transform using class-transformer
    return classToPlain(data, { excludeExtraneousValues: true });
  }
}
