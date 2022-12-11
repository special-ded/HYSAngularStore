import { Injectable } from '@angular/core';
import { Product } from 'src/app/interfaces/products.interface';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  cartList: Product[] = [];

  total: number = 0;
  // obj or []

  addToCart(product: Product) {
    this.cartList.push(product)
    console.log(this.cartList);
    localStorage.setItem('cartList', JSON.stringify(this.cartList));
    this.getTotalPrice()
    return this.cartList
  }

  removeFromCart(id: number) {
    let index = this.cartList.findIndex(val => val.id == id)
    this.cartList.splice(index, 1);
    this.getTotalPrice()
  }

  getTotalPrice(): void {
    this.total = 0;
    this.cartList.map((el: Product) => this.total += el.price);
  }

  getCartList(): Product[] {
    return this.cartList
  }

  clearCart() {
    this.cartList = [];
    return this.cartList;
  }

}
