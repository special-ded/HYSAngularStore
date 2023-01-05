import {
  HttpInterceptor,
  HttpResponse,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class AuthInterceptorService {
  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

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
          if (event instanceof HttpResponse) {
            console.log('Server Response');
          }
        },
        (err) => {
          if (err) {
            // show Modal and then Redirect
            this.router.navigate(['login']);
          }
          console.log(err);
        }
      )
    );
  }
}
