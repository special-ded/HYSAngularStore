import { Injectable } from '@angular/core';
import { Product } from '../interfaces/products.interface';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {
    this.checkLS
  }

  setToLS(products: Product[]): void {
    localStorage.setItem('cartList', JSON.stringify(products));
  }

  checkLS(): Product[] {
    return JSON.parse(localStorage.getItem('cartList')!);
  }
}
