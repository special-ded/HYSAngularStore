import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Product } from '../interfaces/products.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductHttpService implements OnInit {
  URL = 'https://hys-fe-course-api.vercel.app/products';
  products: Product[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  getProductsList() {
    return this.http.get<Product[]>(this.URL);
  }

  getById(id: string) {
    return this.http.get<Product>(this.URL + '/' + id);
  }

  createProduct() {}

  updateProduct() {}

  deleteProduct() {}
}
