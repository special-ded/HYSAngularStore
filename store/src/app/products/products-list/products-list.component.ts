import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/products.interface';

import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {

  constructor(
    private productsService: ProductsService
  ) { };

  products: Product[] = [];

  ngOnInit() {
    this.initProducts(8);
  }

  initProducts(n: number): void {
    this.products = this.productsService.generateProducts(n);
  }
}
