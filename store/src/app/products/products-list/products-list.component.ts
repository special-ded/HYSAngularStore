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
    this.productsService.getProductsList().subscribe(data => {
      data.length === 0 ? this.initProducts(40) : null,
        this.products = data
    })
  }

  initProducts(id: number): void {
    this.productsService.generateProducts(id);
    this.productsService.getProductsList().subscribe(data => this.products = data);
  }
}
