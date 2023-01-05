import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/products.interface';
import { CreateUser, UpdateUser, User } from '../interfaces/user.interface';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class UserHttpService {
  URL = 'https://hys-fe-course-api.vercel.app/users';
  products: Product[] = [];

  constructor(public http: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.URL);
  }

  getUserById(id: string): Observable<User> {
    return this.http.get<User>(this.URL + '/' + id);
  }

  updateUser(data: UpdateUser, id: string): Observable<Object> {
    return this.http.put(this.URL + '/' + id, {
      password: data.password,
    });
  }

  createUser(data: CreateUser): Observable<Object> {
    console.log(data);

    return this.http.post(this.URL, {
      username: data.username,
      password: data.password,
    });
  }

  deleteUser(id: string): Observable<Object> {
    return this.http.delete(this.URL + '/' + id);
  }
}
