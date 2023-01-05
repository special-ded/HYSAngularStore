import {
  HttpInterceptor,
  HttpResponse,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class AuthInterceptorService {
  constructor(private localStorageService: LocalStorageService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      setHeaders: {
        Authorization: this.localStorageService.getToken() || '',
      },
    });

    return next.handle(authReq).pipe(
      tap(
        (event) => {
          console.log('aaaaaaaaaa');

          if (event instanceof HttpResponse) {
            console.log('Server Response');
          }
          console.log('aaaaaaaaaa');
        },
        (err) => {
          console.log(err);
        }
      )
    );
  }
}
