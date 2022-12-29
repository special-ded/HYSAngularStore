import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Create } from '../interfaces/create.interface';
import { Product } from '../interfaces/products.interface';
import { Update } from '../interfaces/update.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductHttpService {
  URL = 'https://hys-fe-course-api.vercel.app/products';
  products: Product[] = [];

  authHeaders = new HttpHeaders({
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJmMjc4ODU3Ny1lMTllLTQzMGUtYTAyZC1lNWU0MTNhMDdkZGIiLCJ1c2VybmFtZSI6ImRyYWdhbm92IiwicGFzc3dvcmQiOiIkMmIkMTAkMUpQRWhWNzd6YnhWalR5UVhySkpUdXI4Z3M2TVlTbTRNTGZqWElFRU1tMDc1SU5YUlg2Vk8iLCJjcmVhdGVkQXQiOiIyMDIyLTEyLTI4VDA5OjI1OjE4LjE3MFoiLCJ1cGRhdGVkQXQiOiIyMDIyLTEyLTI4VDA5OjI1OjE4LjE3MFoiLCJpYXQiOjE2NzIzMDM1MDQsImV4cCI6MTY3MjM4OTkwNH0.0AoM-ucCr6kqMI3N6lwXiqRoLjmOL9SddEJk_ePRouE`,
  });

  constructor(private http: HttpClient) {}

  getProductsList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.URL);
  }

  getById(id: string): Observable<Product> {
    return this.http.get<Product>(this.URL + '/' + id);
  }

  updateProduct(data: Update, id: string): Observable<Object> {
    return this.http.put(
      this.URL + '/' + id,
      {
        price: data.price,
        extraInfo: {
          Bluetooth: 'Y',
          image: 'Y',
        },
      },
      {
        headers: this.authHeaders,
      }
    );
  }

  createProduct(data: Create): Observable<Object> {
    return this.http.post(
      this.URL,
      {
        name: data.name,
        author: 'draganov',
        price: data.price,
        description: data.description,
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

  deleteProduct(id: string): Observable<Object> {
    return this.http.delete(this.URL + '/' + id, {
      headers: this.authHeaders,
    });
  }
}
