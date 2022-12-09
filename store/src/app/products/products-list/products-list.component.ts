import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/products.interface';
import { CartService } from '../cart/cart.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  providers: [ProductsService]
})
export class ProductsListComponent implements OnInit {

  constructor(
    private productsService: ProductsService,
    private cartService: CartService
  ) { };

  products: Product[] = [];

  // cartI: Product[] = []

  ngOnInit() {
    this.initProducts(8);
    // this.getCart()
  }

  initProducts(n: number): void {
    this.products = this.productsService.generateProducts(n);
  }

  // getCart() {
  //   this.cartI = this.cartService.getCartProductList()
  // }
}
