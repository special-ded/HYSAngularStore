import { Injectable } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/products.interface';
import { ProductsService } from 'src/app/shared/services/products.service';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor(private productsService: ProductsService) { }
  ascending: boolean = false;
  sortedProducts: Product[] = [];

  sortById(): void {
    this.ascending = !this.ascending;
    this.productsService.productsList$.subscribe(data => this.sortedProducts = data);

    this.ascending
      ? this.sortedProducts.sort((a, b): number => a.id - b.id)
      : this.sortedProducts.sort((a, b): number => b.id - a.id);

    this.productsService.productsList$.next(this.sortedProducts);
  }
}
