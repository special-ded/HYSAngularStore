import { Injectable } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products.service';

@Injectable({
  providedIn: 'root'
})
export class PaginatorService {

  constructor(private productService: ProductsService) {
    this.productService.getProductsList().subscribe(data => {
      this.totalPages = data.length / 5
    })
  }

  currentPage: number = 1;

  totalPages: number = 1;
}
