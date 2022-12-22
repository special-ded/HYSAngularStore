import { Injectable, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/products.interface';
import { ProductsService } from 'src/app/shared/services/products.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor(private productsService: ProductsService) { }

  ascendingId: boolean = false;
  ascendingPrice: boolean = false;
  ascendingName: boolean = false;
  sortedProducts: Product[] = [];
  filteredByPrice$ = new BehaviorSubject<Product[]>([]);
  priceInput$ = new BehaviorSubject<number>(0);
  priceSelectOption$ = new BehaviorSubject<string>('More than');


  filterByText(text: string | undefined): void {
    let priceInput = 0;
    let priceSelectOption = '';
    this.priceInput$.subscribe(price => priceInput = price)
    this.priceSelectOption$.subscribe(opt => priceSelectOption = opt)

    this.productsService.productsList$.subscribe(data => this.sortedProducts = data);

    const arr = this.sortedProducts.reduce((acc: any, curV: any) => {
      if (curV.name.toLowerCase().search(text?.toLowerCase()) !== -1) {
        acc.push(curV)
      }

      return acc
    }, []);
    console.log(arr);
    this.productsService.filteredProducts$.next(arr);

    this.filterByPrice(priceSelectOption, priceInput)
  }

  filterByPrice(option: string, price: number): void {

    this.productsService.filteredProducts$.subscribe(data => this.sortedProducts = data);

    const arr = this.sortedProducts.reduce((acc: any, curV: any) => {
      if (option === 'More than') {
        if (curV.price > price) {
          acc.push(curV)
        }
      }

      if (option === 'Less than') {
        if (curV.price < price) {
          acc.push(curV)
        }
      }
      return acc
    }, []);

    this.filteredByPrice$.next(arr);
  }

  sortById(): void {
    this.ascendingId = !this.ascendingId;
    this.productsService.filteredProducts$.subscribe(data => this.sortedProducts = data);

    this.ascendingId
      ? this.sortedProducts.sort((a, b): number => a.id - b.id)
      : this.sortedProducts.sort((a, b): number => b.id - a.id);

    this.productsService.filteredProducts$.next(this.sortedProducts);
  }

  sortByPrice(): void {
    this.ascendingPrice = !this.ascendingPrice;
    this.productsService.filteredProducts$.subscribe(data => this.sortedProducts = data);

    this.ascendingPrice
      ? this.sortedProducts.sort((a, b): number => a.price - b.price)
      : this.sortedProducts.sort((a, b): number => b.price - a.price);

    this.productsService.filteredProducts$.next(this.sortedProducts);
  }

  sortByName(): void {
    this.ascendingName = !this.ascendingName;
    this.productsService.filteredProducts$.subscribe(data => this.sortedProducts = data);

    this.ascendingName
      ? this.sortedProducts.sort((a, b) => a.name.localeCompare(b.name))
      : this.sortedProducts.sort((a, b) => a.name.localeCompare(b.name)).reverse();

    this.productsService.filteredProducts$.next(this.sortedProducts);
  }
}
