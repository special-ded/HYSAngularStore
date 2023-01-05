import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  CreateProduct,
  Product,
  UpdateProduct,
} from '../interfaces/products.interface';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class ProductHttpService {
  URL = 'https://hys-fe-course-api.vercel.app/products';
  products: Product[] = [];

  constructor(public http: HttpClient) {}

  getProductsList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.URL);
  }

  getById(id: string): Observable<Product> {
    return this.http.get<Product>(this.URL + '/' + id);
  }

  updateProduct(data: UpdateProduct, id: string): Observable<Object> {
    return this.http.put(this.URL + '/' + id, {
      price: data.price,
      extraInfo: {
        Bluetooth: 'Y',
        image: 'Y',
      },
    });
  }

  createProduct(data: CreateProduct): Observable<Object> {
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

  deleteProduct(id: string): Observable<Object> {
    return this.http.delete(this.URL + '/' + id);
  }
}
