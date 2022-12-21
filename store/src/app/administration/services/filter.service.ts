import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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
  filteredProducts$ = new BehaviorSubject<Product[]>([])

  filterByText(text: string) {
    this.productsService.productsList$.subscribe(data => this.sortedProducts = data);

    let arr = this.sortedProducts.reduce((acc: any, curV: any) => {

      if (curV.name.toLowerCase().search(text.toLowerCase()) !== -1) {
        acc.push(curV)
      }
      return acc
    }, [])
    this.filteredProducts$.next(arr);
  }

  sortById(): void {
    this.ascendingId = !this.ascendingId;
    this.filteredProducts$.subscribe(data => this.sortedProducts = data);

    this.ascendingId
      ? this.sortedProducts.sort((a, b): number => a.id - b.id)
      : this.sortedProducts.sort((a, b): number => b.id - a.id);

    this.filteredProducts$.next(this.sortedProducts);
  }

  sortByPrice(): void {
    this.ascendingPrice = !this.ascendingPrice;
    this.filteredProducts$.subscribe(data => this.sortedProducts = data);

    this.ascendingPrice
      ? this.sortedProducts.sort((a, b): number => a.price - b.price)
      : this.sortedProducts.sort((a, b): number => b.price - a.price);

    this.filteredProducts$.next(this.sortedProducts);
  }

  sortByName(): void {
    this.ascendingName = !this.ascendingName;
    this.filteredProducts$.subscribe(data => this.sortedProducts = data);

    this.ascendingName
      ? this.sortedProducts.sort((a, b) => a.name.localeCompare(b.name))
      : this.sortedProducts.sort((a, b) => a.name.localeCompare(b.name)).reverse();

    this.filteredProducts$.next(this.sortedProducts);
  }
}
