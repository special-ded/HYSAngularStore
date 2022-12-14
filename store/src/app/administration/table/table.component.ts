import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/shared/interfaces/products.interface';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() products: Product[] = [];

  currentPageProducts: Product[] = [];
  currentPage: number = 1;
  totalPages: number = 0;
  startIndex: number = 0;
  loading$ = new BehaviorSubject<boolean>(true);

  constructor(public productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProductsList().subscribe((data: Product[]) => {
      data.length !== 0 ? this.loading$.next(false) : null,
        (this.totalPages = data.length / 5),
        (this.currentPageProducts = this.products.slice(this.startIndex, 5));
    });
  }

  nextPage() {
    if (this.currentPage === this.products.length / 5) {
      return;
    }

    this.currentPage++;
    this.currentPageProducts = this.products.slice(
      (this.startIndex += 5),
      5 * this.currentPage
    );
  }

  prevPage() {
    if (this.currentPage === 1) {
      return;
    }

    this.currentPage--;
    this.currentPageProducts = this.products.slice(
      (this.startIndex -= 5),
      5 * this.currentPage
    );
  }
}
