import { Injectable } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products.service';

@Injectable({
  providedIn: 'root',
})
export class PaginatorService {
  currentPage: number = 1;
  totalPages: number = 1;

  constructor(private productService: ProductsService) {
    this.productService.productsList$.subscribe((data) => {
      this.totalPages = data.length / 5;
    });
  }
}
