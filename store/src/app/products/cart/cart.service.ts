import { Injectable } from '@angular/core';
import { Product } from 'src/app/interfaces/products.interface';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  cartList: Product[] = []

  addToCart(product: Product) {
    this.cartList.push(product)
    console.log(this.cartList);
    localStorage.setItem('cartList', JSON.stringify(this.cartList));
    return this.cartList
  }

  removeFromCart(id: number) {
    console.log(id);
    console.log(this.cartList.map(el => el.id === id))
    this.cartList = this.cartList.filter(e => e.id !== id)

    //     Remove 1 element at index 3 
    // const myFish = ["angel", "clown", "drum", "mandarin", "sturgeon"];
    // const removed = myFish.splice(3, 1);
  }

  getCartList(): Product[] {
    console.log(this.cartList);
    return this.cartList
  }

  clearCart() {
    this.cartList = [];
    return this.cartList;
  }

}
