import { Component, ViewChild, OnInit, ElementRef, OnChanges } from '@angular/core';
import { take } from 'rxjs';
import { Product } from 'src/app/shared/interfaces/products.interface';
import { ProductsService } from 'src/app/shared/services/products.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {

  constructor(public productsService: ProductsService) { }

  products: Product[] = [];
  currentPageProducts: Product[] = [];
  currentPage: number = 1;
  totalPages: number = 0;
  startIndex: number = 0;

  ngOnInit(): void {
    if (this.products.length === 0) {
      console.log("spinner");

    }

    this.productsService.getProductsList()
      .subscribe(data => {
        console.log(data);



        this.products = data,
          this.totalPages = data.length / 5,
          this.currentPageProducts = this.products.slice(this.startIndex, 5)
      })
  }

  nextPage() {
    if (this.currentPage === this.products.length / 5) {
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