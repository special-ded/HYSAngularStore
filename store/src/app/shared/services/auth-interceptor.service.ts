import {
  HttpInterceptor,
  HttpResponse,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      headers: req.headers.set(
        'Session',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI0MmIwZjVkYi0wMjFmLTQ4NzMtODRkYS1hYmIyY2MwYTRiZjEiLCJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmIkMTAkTVZRZS93SlBGN1QuaDV4UzdBb0guLmtwTTdCcEZHYm9CWUNLZC5IUkJqd1dQclRzdEJsSmkiLCJjcmVhdGVkQXQiOiIyMDIyLTEyLTI0VDEyOjE5OjA0LjI2OVoiLCJ1cGRhdGVkQXQiOiIyMDIyLTEyLTI0VDEyOjE5OjA0LjI2OVoiLCJpYXQiOjE2NzIyMTYxNTQsImV4cCI6MTY3MjMwMjU1NH0.Seb172javMCoR-aI51IZ6_CrSJAHDlrxXnnNngD_rqY'
      ),
    });

    return next.handle(authReq).pipe(
      tap(
        (event) => {
          if (event instanceof HttpResponse) {
            console.log('Server Response');
          }
        },
        (err) => {
          console.log(err);
        }
      )
    );
  }
}
