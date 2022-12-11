import { Injectable } from '@angular/core';
import { Product } from '../interfaces/products.interface';

@Injectable()
export class ProductsService {

  generatedProducts: Product[] = [];

  generateProducts(n: number): Product[] {
    const names: string[] = ['Xiaomi 12', 'AirPods', 'Iphone 14', 'Asus ROG 17',
      'Mi AirDots', 'Sony WH-1000XM4', 'Power Bank 20000', 'Invertor 12-220',
      'BFG 9000', 'Doom Eternal'];

    for (let i = 0; i < n; i++) {
      const obj = {
        id: i,
        name: names[Math.floor(Math.random() * 10)],
        price: Math.floor(Math.random() * 1500)
      };
      this.generatedProducts.push(obj);
    }
    console.log(this.generatedProducts);
    return this.generatedProducts;
  }

  getProductById(id: number) {
    console.log(this.generatedProducts);
    return this.generatedProducts[id]
  }
}
