import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/products.interface';
import { ProductsService } from '../../../shared/services/products.service';
import { BehaviorSubject } from 'rxjs';
import { ProductHttpService } from 'src/app/shared/services/product-http.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  constructor(private productsService: ProductsService) {}

  products: Product[] = [];
  loading$ = new BehaviorSubject<boolean>(true);

  ngOnInit(): void {
    this.productsService.generateProducts();

    this.productsService.productsList$.subscribe((data) => {
      data.length !== 0 ? this.loading$.next(false) : null,
        (this.products = data);
    });
  }
}
