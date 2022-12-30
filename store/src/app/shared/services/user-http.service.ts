import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/products.interface';
import { CreateUser, UpdateUser, User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserHttpService {
  URL = 'https://hys-fe-course-api.vercel.app/users';
  products: Product[] = [];

  authHeaders = new HttpHeaders({
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJmMjc4ODU3Ny1lMTllLTQzMGUtYTAyZC1lNWU0MTNhMDdkZGIiLCJ1c2VybmFtZSI6ImRyYWdhbm92IiwicGFzc3dvcmQiOiIkMmIkMTAkMUpQRWhWNzd6YnhWalR5UVhySkpUdXI4Z3M2TVlTbTRNTGZqWElFRU1tMDc1SU5YUlg2Vk8iLCJjcmVhdGVkQXQiOiIyMDIyLTEyLTI4VDA5OjI1OjE4LjE3MFoiLCJ1cGRhdGVkQXQiOiIyMDIyLTEyLTI4VDA5OjI1OjE4LjE3MFoiLCJpYXQiOjE2NzIzODYxMjksImV4cCI6MTY3MjQ3MjUyOX0.ArkYEq25jMrOUi8iTo9aBoeAlSykAr6vbsYriJlYT7o`,
  });

  constructor(public http: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.URL, {
      headers: this.authHeaders,
    });
  }

  getUserById(id: string): Observable<User> {
    return this.http.get<User>(this.URL + '/' + id, {
      headers: this.authHeaders,
    });
  }

  updateUser(data: UpdateUser, id: string): Observable<Object> {
    return this.http.put(
      this.URL + '/' + id,
      {
        password: data.password,
      },
      {
        headers: this.authHeaders,
      }
    );
  }

  createUser(data: CreateUser): Observable<Object> {
    console.log(data);

    return this.http.post(
      this.URL,
      {
        username: data.username,
        password: data.password,
      },
      {
        headers: this.authHeaders,
      }
    );
  }

  deleteUser(id: string): Observable<Object> {
    return this.http.delete(this.URL + '/' + id, {
      headers: this.authHeaders,
    });
  }
}
