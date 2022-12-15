import { Injectable, OnInit } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/shared/interfaces/products.interface';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})

export class CartService implements OnInit {

  constructor(private lsService: LocalStorageService) { }

  ngOnInit(): void {
    this.updateTotalPrice();
  }

  cartTotal$ = new BehaviorSubject<number>(0);

  cartList: Product[] = [];
  total: number = 0;


  addToCart(product: Product) {
    if (!product) {
      return
    }
    this.cartList.push(product);
    this.lsService.setToLS(this.cartList);
    this.updateTotalPrice();

    return this.cartList;
  }

  removeFromCart(id: number) {
    let index = this.cartList.findIndex(val => val.id == id);
    this.cartList.splice(index, 1);
    this.updateTotalPrice();
    this.lsService.setToLS(this.cartList);
  }


  updateTotalPrice() {
    this.cartTotal$.next(this.cartList.reduce((acc: number, curV: Product) => acc += curV.price * curV.quantity, 0))
  }

  getCartList(): Product[] {
    if (this.cartList.length === 0) {
      this.cartList = this.lsService.checkLS()
    }

    this.updateTotalPrice()
    return this.cartList
  }

  addQuantity(id: number) {
    this.cartList.find(x => x.id === id)!.quantity++;
    this.updateTotalPrice()
    this.lsService.setToLS(this.cartList);
  }

  subtractQuantity(id: number) {
    this.cartList.find(x => x.id === id)!.quantity--;

    if (this.cartList.find(x => x.id === id)!.quantity === 0) {
      this.removeFromCart(id)
      return
    }
    this.updateTotalPrice()
    this.lsService.setToLS(this.cartList)
  }
}