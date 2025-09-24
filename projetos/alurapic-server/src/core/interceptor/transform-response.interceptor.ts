import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { NestResponse } from '../http/nest-response';
import { AbstractHttpAdapter, HttpAdapterHost } from '@nestjs/core';

@Injectable()
export class TransformResponseInterceptor implements NestInterceptor {
  private readonly httAdapter: AbstractHttpAdapter;

  constructor(adapterHost: HttpAdapterHost) {
    this.httAdapter = adapterHost.httpAdapter;
  }

  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      map((responseController: NestResponse) => {
        if (responseController instanceof NestResponse) {
          const ctx = context.switchToHttp();
          const response = ctx.getResponse();
          const { headers, body, status } = responseController;

          const headersKeys = Object.getOwnPropertyNames(headers);
          headersKeys.forEach((key) => {
            const headerValue = headers[key];
            this.httAdapter.setHeader(response, key, headerValue);
          });

          this.httAdapter.status(response, status);
          return body;
        }

        return responseController;
      }),
    );
  }
}
