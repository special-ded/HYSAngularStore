import { Injectable } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/products.interface';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {
    this.checkLocalStorage();
  }

  setToLocalStorage(products: Product[]): void {
    localStorage.setItem('cartList', JSON.stringify(products));
  }

  checkLocalStorage(): Product[] {
    if (
      JSON.parse(localStorage.getItem('cartList')!) === null ||
      JSON.parse(localStorage.getItem('cartList')!)[0] === null
    ) {
      localStorage.setItem('cartList', '[]');
      return [];
    }
    return JSON.parse(localStorage.getItem('cartList')!);
  }
}
