import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Create } from '../interfaces/create.interface';
import { Product } from '../interfaces/products.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductHttpService {
  URL = 'https://hys-fe-course-api.vercel.app/products';
  products: Product[] = [];

  create: Object = {
    name: 'Honda INH3000 ',
    author: 'draganov',
    price: 1200,
    description: 'Industry-leading generator',
    extraInfo: {
      ololo: 1,
      image: 'https://d13o3tuo14g2wf.cloudfront.net/',
    },
  };

  update: Object = {
    price: 1000,
    extraInfo: {
      Bluetooth: 'Y',
      image: 'Y',
    },
  };
  authHeaders = new HttpHeaders({
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI0MmIwZjVkYi0wMjFmLTQ4NzMtODRkYS1hYmIyY2MwYTRiZjEiLCJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmIkMTAkTVZRZS93SlBGN1QuaDV4UzdBb0guLmtwTTdCcEZHYm9CWUNLZC5IUkJqd1dQclRzdEJsSmkiLCJjcmVhdGVkQXQiOiIyMDIyLTEyLTI0VDEyOjE5OjA0LjI2OVoiLCJ1cGRhdGVkQXQiOiIyMDIyLTEyLTI0VDEyOjE5OjA0LjI2OVoiLCJpYXQiOjE2NzIyMTYxNTQsImV4cCI6MTY3MjMwMjU1NH0.Seb172javMCoR-aI51IZ6_CrSJAHDlrxXnnNngD_rqY`,
  });

  constructor(private http: HttpClient) {}

  getProductsList() {
    return this.http.get<Product[]>(this.URL);
  }

  getById(id: string) {
    return this.http.get<Product>(this.URL + '/' + id);
  }

  updateProduct(id: string) {
    return this.http.put(this.URL + '/' + id, this.update, {
      headers: this.authHeaders,
    });
  }

  createProduct(data: Create) {
    return this.http.post(
      this.URL,
      {
        name: 'data.name',
        author: 'draganov',
        price: 100,
        description: 'data.description',
        extraInfo: {
          ololo: 1,
          image: 'https://d13o3tuo14g2wf.cloudfront.net/',
        },
      },
      {
        headers: this.authHeaders,
      }
    );
  }

  deleteProduct(id: string) {
    return this.http.delete(this.URL + '/' + id, {
      headers: this.authHeaders,
    });
  }
}
