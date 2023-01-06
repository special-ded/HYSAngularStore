import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  CreateProduct,
  Product,
  UpdateProduct,
} from '../interfaces/products.interface';

@Injectable({
  providedIn: 'root',
})
export class BaseHttpService {
  URL = 'https://hys-fe-course-api.vercel.app/';

  constructor(private http: HttpClient) {}

  getURL(): string {
    return this.URL;
  }

  getList<T>(): Observable<T> {
    return this.http.get<T>(this.URL);
  }

  getById<T>(id: string): Observable<T> {
    return this.http.get<T>(this.URL + '/' + id);
  }

  update(data: UpdateProduct, id: string): Observable<Object> {
    return this.http.put(this.URL + '/' + id, {
      price: data.price,
      extraInfo: {
        Bluetooth: 'Y',
        image: 'Y',
      },
    });
  }

  create(data: CreateProduct): Observable<Object> {
    return this.http.post(this.URL, {
      name: data.name,
      author: 'draganov',
      price: data.price,
      description: data.description,
      extraInfo: {
        ololo: 1,
        image: 'https://d13o3tuo14g2wf.cloudfront.net/',
      },
    });
  }

  delete(id: string): Observable<Object> {
    return this.http.delete(this.URL + '/' + id);
  }
}
