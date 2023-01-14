import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BaseHttpService {
  protected readonly BASE_URL = 'https://hys-fe-course-api.vercel.app/';
  protected readonly FILTER_BY_NAME_URL =
    'https://hys-fe-course-api.vercel.app/products?filter=name;';

  constructor(private http: HttpClient) {}

  getURL(): string {
    return this.BASE_URL;
  }

  getList<T>(): Observable<T> {
    return this.http.get<T>(this.getURL());
  }

  getById<I>(id: string): Observable<I> {
    return this.http.get<I>(this.getURL() + id);
  }

  update<U>(data: U, id: string): Observable<Object> {
    return this.http.put(this.getURL() + id, data);
  }

  create<C>(data: C): Observable<Object> {
    return this.http.post(this.getURL(), data);
  }

  delete(id: string): Observable<Object> {
    return this.http.delete(this.getURL() + id);
  }

  filterByName<T>(name: string): Observable<T> {
    return this.http.get<T>(this.FILTER_BY_NAME_URL + name);
  }
}
