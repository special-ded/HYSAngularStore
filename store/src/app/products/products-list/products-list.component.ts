import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/products.interface';

import { ProductsService } from '../../shared/services/products.service';

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

  ngOnInit(): void {
    this.products = this.productsService.getGeneratedProducts()
    if (this.products.length === 0) {
      this.initProducts(80);
    }
  }

  initProducts(id: number): void {
    this.productsService.generateProducts(id)
    this.products = this.productsService.getGeneratedProducts()
  }
}
