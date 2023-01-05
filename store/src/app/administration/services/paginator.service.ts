import { Injectable } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products.service';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/shared/interfaces/products.interface';

@Injectable({
  providedIn: 'root',
})
export class PaginatorService {
  totalPages$ = new BehaviorSubject<number>(0);
  currentPageProducts$ = new BehaviorSubject<Product[]>([]);

  constructor(private productService: ProductsService) {
    this.productService.productsList$.subscribe((data) => {
      this.totalPages$.next(Math.ceil(data.length / 5));
    });
  }
}
