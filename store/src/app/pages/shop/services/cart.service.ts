import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/shared/interfaces/products.interface';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class CartService implements OnInit, OnDestroy {
  cartTotal$ = new BehaviorSubject<number>(0);
  cartList$ = new BehaviorSubject<Product[]>([]);
  cartList: Product[] = [];
  arr: any[] = [];

  constructor(private lsService: LocalStorageService) {}

  ngOnInit(): void {
    this.cartList = this.lsService.checkLocalStorage();
    this.cartList$.next(this.lsService.checkLocalStorage());
    this.cartList$.subscribe((data) => {
      console.log(data);
      this.cartTotal$.next(
        data.reduce(
          (acc: number, curV: Product) => (acc += curV.price * curV.quantity),
          0
        )
      );
    });
  }

  ngOnDestroy(): void {
    this.cartList$.unsubscribe();
    this.cartTotal$.unsubscribe();
  }

  addToCart(product: Product) {
    if (!product) {
      return;
    }

    this.cartList = [...this.cartList, product];
    this.cartList$.next(this.cartList);
    this.lsService.setToLocalStorage(this.cartList);
  }

  removeFromCart(id: string) {
    this.cartList.splice(
      this.cartList.findIndex((val) => val.id == id),
      1
    );

    this.lsService.setToLocalStorage(this.cartList);
    this.cartList$.next(this.cartList);
  }

  getCartList(): Product[] {
    if (this.cartList.length === 0) {
      this.cartList = this.lsService.checkLocalStorage();
    }

    return this.cartList;
  }

  addQuantity(id: string) {
    this.cartList.find((x) => x.id === id)!.quantity++;
    this.lsService.setToLocalStorage(this.cartList);
    this.cartList$.next(this.cartList);
  }

  subtractQuantity(id: string) {
    this.cartList.find((x) => x.id === id)!.quantity--;

    if (this.cartList.find((x) => x.id === id)!.quantity === 0) {
      this.removeFromCart(id);
      return;
    }

    this.lsService.setToLocalStorage(this.cartList);
    this.cartList$.next(this.cartList);
  }
}
