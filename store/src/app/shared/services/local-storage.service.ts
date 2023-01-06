import { Injectable } from '@angular/core';
import { Product } from '../interfaces/products.interface';
import { Token } from '../interfaces/token.interface';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {
    this.checkLS();
  }

  setToLS(products: Product[]): void {
    localStorage.setItem('cartList', JSON.stringify(products));
  }

  checkLS(): Product[] {
    if (
      JSON.parse(localStorage.getItem('cartList')!) === null ||
      JSON.parse(localStorage.getItem('cartList')!)[0] === null
    ) {
      localStorage.setItem('cartList', '[]');
      return [];
    }

    return JSON.parse(localStorage.getItem('cartList')!);
  }

  setToken(token: Token): void {
    localStorage.setItem(
      'token',
      JSON.stringify('Bearer ' + token.access_token)
    );
  }

  getToken(): string {
    return JSON.parse(localStorage.getItem('token')!);
  }

  deleteToken(): void {
    localStorage.removeItem('token');
  }
}
