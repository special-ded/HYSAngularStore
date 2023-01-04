import { Injectable } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products.service';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/shared/interfaces/products.interface';

@Injectable({
  providedIn: 'root',
})
export class PaginatorService {
  currentPage: number = 1;
  totalPages: number = 1;
  currentPageProducts$ = new BehaviorSubject<Product[]>([]);

  constructor(private productService: ProductsService) {
    this.productService.productsList$.subscribe((data) => {
      this.totalPages = data.length / 5;
    });
  }
}
