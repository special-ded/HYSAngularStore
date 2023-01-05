import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  form: FormGroup = this.fb.group({
    username: null,
    password: null,
  });

  constructor(
    public http: HttpClient,
    private localStorageService: LocalStorageService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.login().subscribe((data) => {
      console.log(data), this.localStorageService.setToken(data);
    });
  }

  login(): Observable<Token> {
    console.log(this.form.getRawValue().username);

    return this.http.post(this.URL, {
      username: this.form.getRawValue().username,
      password: this.form.getRawValue().password,
    });
  }
}
