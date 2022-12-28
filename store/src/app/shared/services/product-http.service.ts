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
  create: Product = {
    name: '',
    id: '',
    price: 0,
    description: '',
    quantity: 1,
  };

  update: Object = {
    price: 11450,
    extraInfo: {
      Bluetooth: 'Yes',
      image: 'https://gagadget.com.jpg',
    },
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  getProductsList() {
    return this.http.get<Product[]>(this.URL);
  }

  getById(id: string) {
    return this.http.get<Product>(this.URL + '/' + id);
  }

  createProduct() {
    this.http.post<Product>(this.URL, this.create);
  }

  updateProduct(id: string) {
    this.http.put(this.URL + '/' + id, this.update);
  }

  deleteProduct(id: string) {
    this.http.delete<Product>(this.URL + '/' + id);
  }
}
