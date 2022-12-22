import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import {
  BehaviorSubject, Subject, delay, debounceTime, distinctUntilChanged
  , Subscription
} from 'rxjs';
import { Product } from 'src/app/shared/interfaces/products.interface';
import { ProductsService } from 'src/app/shared/services/products.service';
import { FilterService } from '../services/filter.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit, OnDestroy {

  constructor(
    public productsService: ProductsService,
    private filterService: FilterService
  ) { }

  products: Product[] = [];
  currentPageProducts: Product[] = [];
  currentPage: number = 1;
  totalPages: number = 0;
  startIndex: number = 0;
  isIdAscending: boolean = true;
  isPriceAscending: boolean = true;
  isNameAscending: boolean = true;
  loading$ = new BehaviorSubject<boolean>(true);
  searchSubject$ = new Subject<string | undefined>();
  private searchSubscription?: Subscription;
  price: number = 0;
  priceSelectOption: string = "More than";


  ngOnInit(): void {
    this.resetFilter();

    this.filterService.filteredByPrice$
      .pipe(debounceTime(500))
      .subscribe(data => {
        data.length !== 0 ? this.loading$.next(false) : null,
          this.products = data,
          this.pageHandler(data),
          this.arrowHandler()
      })
  }

  ngOnDestroy(): void {
    this.searchSubscription?.unsubscribe()
  }

  searchInput(val: Event): void {
    const searchQuery = (val.target as HTMLInputElement).value;

    this.searchSubscription = this.searchSubject$
      .pipe(
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe((text) => this.filterService.filterByText(text!));

    this.searchSubject$.next(searchQuery?.trim());
  }

  priceInput(val: Event): void {

    if (isNaN(+(val.target as HTMLInputElement).value)) {
      this.priceSelectOption = (val.target as HTMLInputElement).value;
      this.filterService.priceSelectOption$.next(this.priceSelectOption);
    }

    if (!isNaN(+(val.target as HTMLInputElement).value)) {
      this.price = +(val.target as HTMLInputElement).value;
      this.filterService.priceInput$.next(this.price);
    }

    this.filterService.filterByPrice(this.priceSelectOption, this.price);
  }

  sortById(): void {
    this.filterService.sortById();
  }
  sortByPrice(): void {
    this.filterService.sortByPrice();
  }
  sortByName(): void {
    this.filterService.sortByName();
  }

  pageHandler(data: Product[]): void {
    this.totalPages = Math.round(data.length / 5),
      this.currentPageProducts = this.products.slice(0, 5),
      this.currentPage = 1,
      this.startIndex = 0
  }

  arrowHandler(): void {
    this.isIdAscending = this.filterService.ascendingId;
    this.isPriceAscending = this.filterService.ascendingPrice;
    this.isNameAscending = this.filterService.ascendingName;
  }

  resetFilter(): void {
    this.filterService.filterByText('');
  }


  nextPage(): void {
    if (this.currentPage >= Math.round(this.products.length / 5)) {
      return
    }

    this.currentPage++;
    this.currentPageProducts = this.products.slice(this.startIndex += 5, 5 * this.currentPage);
  }

  prevPage(): void {
    if (this.currentPage === 1) {
      return
    }

    this.currentPage--;
    this.currentPageProducts = this.products.slice(this.startIndex -= 5, 5 * this.currentPage);
  }
}