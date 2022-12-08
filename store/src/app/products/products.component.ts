import { Component, Injectable, OnInit } from '@angular/core';
import { Product } from '../interfaces/products.interface';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [ProductsService]
})

// @Injectable()
export class ProductsComponent {

  // constructor(private productsService: ProductsService) { };

  // products: Product[] = [];

  // ngOnInit() {
  //   this.initProducts(8);
  // }

  // initProducts(n: number): void {
  //   this.products = this.productsService.generateProducts(n);
  // }
}
