import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/products.interface';
import { ProductsService } from 'src/app/shared/services/products.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];
  loading$ = new BehaviorSubject<boolean>(true);

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProductsList().subscribe((data) => {
      data.length === 0 ? this.initProducts(10) : null,
        data.length !== 0 ? this.loading$.next(false) : null,
        (this.products = data);
    });
  }

  initProducts(n: number): void {
    this.productsService.generateProducts(n);
    this.productsService
      .getProductsList()
      .subscribe((data) => (this.products = data));
  }
}
