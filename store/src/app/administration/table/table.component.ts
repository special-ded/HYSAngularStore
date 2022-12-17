import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/products.interface';
import { ProductsService } from 'src/app/shared/services/products.service';
import { PaginatorService } from '../services/paginator.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {

  constructor(private productsService: ProductsService,
    private paginatorService: PaginatorService) { }

  products: Product[] = [];
  currentPageProducts: Product[] = [];
  currentPage: number = this.paginatorService.currentPage
  totalPages: number = this.paginatorService.totalPages
  i: number = 0

  ngOnInit(): void {
    this.productsService.productList$.subscribe(data => this.products = data)
    this.currentPageProducts = this.products.slice(this.i, 5)
  }

  nextPage() {
    if (this.currentPage === this.products.length / 5) {
      return
    }

    this.currentPage++;
    this.currentPageProducts = this.products.slice(this.i += 5, 5 * this.currentPage);
  }

  prevPage() {
    if (this.currentPage === 1) {
      return
    }

    this.currentPage--;
    this.currentPageProducts = this.products.slice(this.i -= 5, 5 * this.currentPage);
  }
}