import { Injectable, OnInit } from '@angular/core';
import { delay, Observable, of, BehaviorSubject } from 'rxjs';
import { Product } from '../interfaces/products.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  generatedProducts: Product[] = [];
  productsList$ = new BehaviorSubject<Product[]>([]);
  filteredProducts$ = new BehaviorSubject<Product[]>([]);

  generateProducts(n: number): void {
    const names: string[] = ['Xiaomi 12', 'AirPods', 'Iphone 14', 'Asus ROG 17',
      'Mi AirDots', 'Sony WH-1000XM4', 'Power Bank 200', 'Invertor 12-220',
      'BFG 9000', 'Doom Eternal'];

    for (let i = 0; i < n; i++) {
      const obj = {
        id: Math.floor(Math.random() * 1500),
        name: names[Math.floor(Math.random() * 10)],
        price: Math.floor(Math.random() * 1500),
        quantity: 1
      };
      this.generatedProducts.push(obj);
    }
    this.productsList$.next(this.generatedProducts);
    this.filteredProducts$.next(this.generatedProducts);
  }

  getProductsList(): Observable<Product[]> {
    return of(this.generatedProducts).pipe(delay(1000));
  }

  getProductById(id: number): Product {
    return this.generatedProducts.find(x => x.id === id)!;
  }
}
