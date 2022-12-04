import { Component, Injectable, OnInit } from '@angular/core';
import { Product } from '../interfaces/products.interface';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [ProductsService]
})

@Injectable()
export class ProductsComponent implements OnInit {

  constructor(private productsService: ProductsService) { };

  products: Product[] = [];

  ngOnInit() {
    this.getProducts(8);
  }

  getProducts(n: number): void {
    this.products = this.productsService.generateProducts(n);
  }
}
