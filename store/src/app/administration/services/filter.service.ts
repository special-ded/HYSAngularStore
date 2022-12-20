import { Injectable } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/products.interface';
import { ProductsService } from 'src/app/shared/services/products.service';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor(private productsService: ProductsService) { }
  ascendingId: boolean = false;
  ascendingPrice: boolean = false;
  ascendingName: boolean = false;
  sortedProducts: Product[] = [];

  sortById(): void {
    this.ascendingId = !this.ascendingId;
    this.productsService.productsList$.subscribe(data => this.sortedProducts = data);

    this.ascendingId
      ? this.sortedProducts.sort((a, b): number => a.id - b.id)
      : this.sortedProducts.sort((a, b): number => b.id - a.id);

    this.productsService.productsList$.next(this.sortedProducts);
  }

  sortByPrice(): void {
    this.ascendingPrice = !this.ascendingPrice;
    this.productsService.productsList$.subscribe(data => this.sortedProducts = data);

    this.ascendingPrice
      ? this.sortedProducts.sort((a, b): number => a.price - b.price)
      : this.sortedProducts.sort((a, b): number => b.price - a.price);

    this.productsService.productsList$.next(this.sortedProducts);
  }

  sortByName(): void {
    this.ascendingName = !this.ascendingName;
    this.productsService.productsList$.subscribe(data => this.sortedProducts = data);

    this.ascendingName
      ? this.sortedProducts.sort((a, b) => a.name.localeCompare(b.name))
      : this.sortedProducts.sort((a, b) => a.name.localeCompare(b.name)).reverse();
    console.log(this.sortedProducts);

    this.productsService.productsList$.next(this.sortedProducts);
  }

}
