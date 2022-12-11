import { Injectable, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/products.interface';
import { LocalStorageService } from '../local-storage.service';

@Injectable({
  providedIn: 'root'
})

export class CartService implements OnInit {

  constructor(
    private lsService: LocalStorageService
  ) { }
  ngOnInit(): void {
    this.getTotalPrice()
  }
  cartList: Product[] = [];

  total: number = 0;
  // obj or []

  addToCart(product: Product) {
    this.cartList.push(product);
    this.lsService.setToLS(this.cartList);
    this.getTotalPrice();
    return this.cartList;
  }

  removeFromCart(id: number) {
    let index = this.cartList.findIndex(val => val.id == id);
    this.cartList.splice(index, 1);
    this.getTotalPrice();
    this.lsService.setToLS(this.cartList);
  }

  getTotalPrice(): number {
    return this.cartList.reduce((acc: number, curV: Product) => acc += curV.price, 0);
  }

  getCartList(): Product[] {

    if (this.cartList.length === 0) {
      this.cartList = this.lsService.checkLS()
    }

    this.getTotalPrice()
    return this.cartList
  }
}
