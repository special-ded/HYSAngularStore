import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/products.interface';
import { FilterService } from '../services/filter.service';
import { PaginatorService } from '../services/paginator.service';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit {
  products: Product[] = [];
  currentPage: number = 1;
  startIndex: number = 0;
  productsOnPage: number = 5;

  constructor(
    private filterService: FilterService,
    public paginatorService: PaginatorService
  ) {}

  ngOnInit(): void {
    this.filterService.filteredByPrice$.subscribe((data) => {
      this.products = data;
    });
  }

  nextPage(): void {
    if (
      this.currentPage >= Math.ceil(this.products.length / this.productsOnPage)
    ) {
      return;
    }

    this.currentPage++;
    this.paginatorService.currentPageProducts$.next(
      this.products.slice(
        (this.startIndex += this.productsOnPage),
        this.productsOnPage * this.currentPage
      )
    );
  }

  prevPage(): void {
    if (this.currentPage === 1) {
      return;
    }

    this.currentPage--;
    this.paginatorService.currentPageProducts$.next(
      this.products.slice(
        (this.startIndex -= this.productsOnPage),
        this.productsOnPage * this.currentPage
      )
    );
  }
}
