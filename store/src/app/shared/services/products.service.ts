import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../interfaces/products.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  generatedProducts: Product[] = [];

  private _productsList$ = new BehaviorSubject<Product[]>([
    { id: 1087, name: "Asus ROG 17", price: 111, quantity: 4 },
    { id: 1132, name: "Iphone 14", price: 111, quantity: 6 },
    { id: 1143, name: "Doom Eternal", price: 111, quantity: 1 },
    { id: 1207, name: "Iphone 14", price: 111, quantity: 1 },
    { id: 1110, name: "Xiaomi 12", price: 111, quantity: 1 }
  ]);
  public productList$ = this._productsList$.asObservable();

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
    this._productsList$.next(this.generatedProducts)
  }

  getGeneratedProducts(): Product[] {
    return this.generatedProducts
  }

  getProductById(id: number): Product {
    return this.generatedProducts.find(x => x.id === id)!;
  }
}
