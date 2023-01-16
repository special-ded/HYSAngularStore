import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Token } from 'src/app/shared/interfaces/token.interface';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  protected readonly LOGIN_URL =
    'https://hys-fe-course-api-omega.vercel.app/auth/login';
  formStatus: string = 'INVALID';

  form: FormGroup = this.fb.group({
    username: [
      '',
      [
        Validators.required,
        Validators.pattern('[a-zA-Z,0-9]*'),
        Validators.minLength(3),
        Validators.maxLength(30),
      ],
    ],

    password: [
      '',
      [
        Validators.required,
        Validators.pattern('[a-zA-Z,0-9]*'),
        Validators.minLength(6),
        Validators.maxLength(30),
      ],
    ],
  });

  constructor(
    public http: HttpClient,
    private localStorageService: LocalStorageService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form.statusChanges.subscribe((status) => (this.formStatus = status));
  }

  send(): void {
    if (this.formStatus === 'INVALID') {
      alert('Invalid Usrename or Password input');
      return;
    }

    this.toLogIn().subscribe((data) => {
      this.localStorageService.setToken(data),
        this.router.navigate(['administration']);
    });
  }

  toLogIn(): Observable<Token> {
    return this.http.post(this.LOGIN_URL, {
      username: this.form.getRawValue().username,
      password: this.form.getRawValue().password,
    });
  }
}
