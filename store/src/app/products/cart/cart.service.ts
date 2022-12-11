import { Injectable } from '@angular/core';
import { Product } from 'src/app/interfaces/products.interface';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  cartList: Product[] = [];

  addToCart(product: Product) {
    this.cartList.push(product)
    console.log(this.cartList);
    localStorage.setItem('cartList', JSON.stringify(this.cartList));
    return this.cartList
  }

  removeFromCart(id: number) {
    let index = this.cartList.findIndex(val => val.id == id)
    this.cartList.splice(index, 1);
    this.getTotalPrice()
  }

  getTotalPrice(): number {
    let totalPrice: number = 0
    this.cartList.map((el: Product) => totalPrice += el.price);
    console.log(totalPrice);

    return totalPrice
  }

  getCartList(): Product[] {
    return this.cartList
  }

  clearCart() {
    this.cartList = [];
    return this.cartList;
  }

}
