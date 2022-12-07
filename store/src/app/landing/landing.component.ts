import { Component, Injectable, OnInit } from '@angular/core';
import { Product } from '../interfaces/products.interface';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  providers: [ProductsService]
})

@Injectable()
export class LandingComponent implements OnInit {

  constructor(private productsService: ProductsService) { };

  products: Product[] = [];

  ngOnInit() {
    this.initProducts(8);
  }

  initProducts(n: number): void {
    this.products = this.productsService.generateProducts(n);
  }

}
