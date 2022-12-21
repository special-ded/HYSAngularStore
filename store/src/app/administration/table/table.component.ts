import { Component, ViewChild, OnInit, ElementRef, OnChanges } from '@angular/core';
import { BehaviorSubject, delay } from 'rxjs';
import { Product } from 'src/app/shared/interfaces/products.interface';
import { ProductsService } from 'src/app/shared/services/products.service';
import { FilterService } from '../services/filter.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {

  constructor(
    public productsService: ProductsService,
    private filterService: FilterService
  ) { }

  products: Product[] = [];
  currentPageProducts: Product[] = [];
  currentPage: number = 1;
  totalPages: number = 0;
  startIndex: number = 0;
  loading$ = new BehaviorSubject<boolean>(true);
  isIdAscending: boolean = true;
  isPriceAscending: boolean = true;
  isNameAscending: boolean = true;

  ngOnInit(): void {
    this.productsService.productsList$.subscribe(data => this.products = data)
    this.filterService.filteredProducts$.next(this.products)

    this.filterService.filteredProducts$
      .pipe(delay(1000))
      .subscribe(data => {
        data.length !== 0 ? this.loading$.next(false) : null,
          console.log(data),
          console.log(this.startIndex),
          this.products = data,
          this.pageHandler(data),
          this.isIdAscending = this.filterService.ascendingId
        this.isPriceAscending = this.filterService.ascendingPrice
        this.isNameAscending = this.filterService.ascendingName
      })
  }

  textInput(val: Event) {
    this.filterService.filterByText((val.target as HTMLTextAreaElement).value)
  }

  sortById() {
    this.filterService.sortById();
  }
  sortByPrice() {
    this.filterService.sortByPrice();
  }
  sortByName() {
    this.filterService.sortByName();
  }

  pageHandler(data: Product[]): void {
    this.totalPages = Math.round(data.length / 5),
      this.currentPageProducts = this.products.slice(0, 5),
      this.currentPage = 1,
      this.startIndex = 0
  }

  nextPage() {
    if (this.currentPage >= Math.round(this.products.length / 5)) {
      return
    }

    this.currentPage++;
    this.currentPageProducts = this.products.slice(this.startIndex += 5, 5 * this.currentPage);
  }

  prevPage() {
    if (this.currentPage === 1) {
      return
    }

    this.currentPage--;
    this.currentPageProducts = this.products.slice(this.startIndex -= 5, 5 * this.currentPage);
  }
}