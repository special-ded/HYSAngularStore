import {
  HttpResponse,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { ModalComponent } from 'src/app/login/modal/modal.component';
import { LocalStorageService } from './local-storage.service';
import { MatDialogModule } from '@angular/material/dialog';

@Injectable()
export class AuthInterceptorService {
  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
    private modal: MatDialog
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
        (error) => {
          if (error.status === 401) {
            console.log(error);
            this.localStorageService.deleteToken();
            this.ok();
          }
          console.log(error);
        }
      )
    );
  }

  ok() {
    let addDialog = this.modal.open(ModalComponent, {
      height: '247px',
      width: '570px',
    });

    addDialog.afterClosed().subscribe((data) => {
      if (data) {
        this.router.navigate(['login']);
      }
    });
  }
}
