import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AbstractHttpAdapter, HttpAdapterHost } from '@nestjs/core';
import { Request, Response } from 'express';

@Catch()
export class ExceptionHttpFilter implements ExceptionFilter {
  private readonly httpAdapter: AbstractHttpAdapter;

  constructor(adaperHost: HttpAdapterHost) {
    this.httpAdapter = adaperHost.httpAdapter;
  }

  catch(exception: Error, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const request = context.getRequest<Request>();
    const response = context.getResponse<Response>();

    const { status, body } =
      exception instanceof HttpException
        ? {
            status: exception.getStatus(),
            body: exception.getResponse(),
          }
        : {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            body: {
              statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
              timestamp: new Date().toISOString(),
              path: request.path,
              message: exception.message,
            },
          };

    this.httpAdapter.reply(response, body, status);
  }
}
