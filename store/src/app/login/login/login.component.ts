import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Token } from 'src/app/shared/interfaces/token.interface';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  URL = 'https://hys-fe-course-api.vercel.app/auth/login';

  constructor(
    public http: HttpClient,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    // this.foo().subscribe((data) => this.localStorageService.setToken(data));
  }

  foo(): Observable<Token> {
    return this.http.post(this.URL, {
      username: 'draganov',
      // password: '12345678',
    });
  }
}
