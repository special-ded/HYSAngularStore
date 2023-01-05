import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, debounceTime } from 'rxjs';
import { Product } from 'src/app/shared/interfaces/products.interface';
import { ModalComponent } from '../modal/modal.component';
import { ProductHttpService } from '../../shared/services/product-http.service';
import { FilterService } from '../services/filter.service';
import { ProductsService } from 'src/app/shared/services/products.service';
import { PaginatorService } from '../services/paginator.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  products: Product[] = [];
  currentPage: number = 1;
  totalPages: number = 0;
  startIndex: number = 0;
  isIdAscending: boolean = true;
  isPriceAscending: boolean = true;
  isNameAscending: boolean = true;
  loading$ = new BehaviorSubject<boolean>(true);
  pageProducts$ = this.paginatorService.currentPageProducts$;
  constructor(
    private filterService: FilterService,
    private modal: MatDialog,
    private http: ProductHttpService,
    private productService: ProductsService,
    private paginatorService: PaginatorService
  ) {}

  ngOnInit(): void {
    this.resetFilter();
    this.productService.generateProducts();
    this.filterService.filteredByPrice$.subscribe((data) => {
      data.length !== 0 ? this.loading$.next(false) : null,
        (this.products = data);
      this.pageHandler(data);
      this.arrowHandler();
    });
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
    this.paginatorService.currentPageProducts$.next(this.products.slice(0, 5)),
      (this.currentPage = 1),
      (this.startIndex = 0);
  }

  arrowHandler(): void {
    this.isIdAscending = this.filterService.ascendingId;
    this.isPriceAscending = this.filterService.ascendingPrice;
    this.isNameAscending = this.filterService.ascendingName;
  }

  resetFilter(): void {
    this.filterService.filterByText('');
  }

  // nextPage(): void {
  //   if (this.currentPage >= Math.ceil(this.products.length / 5)) {
  //     return;
  //   }

  //   this.currentPage++;
  //   this.currentPageProducts = this.products.slice(
  //     (this.startIndex += 5),
  //     5 * this.currentPage
  //   );
  // }

  // prevPage(): void {
  //   if (this.currentPage === 1) {
  //     return;
  //   }

  //   this.currentPage--;
  //   this.currentPageProducts = this.products.slice(
  //     (this.startIndex -= 5),
  //     5 * this.currentPage
  //   );
  // }

  add() {
    let addDialog = this.modal.open(ModalComponent, {
      height: '547px',
      width: '570px',
      data: {
        title: 'Add Product ',
        delete: false,
      },
    });

    addDialog.afterClosed().subscribe((data) => {
      if (data) {
        this.http.createProduct(data).subscribe((data) => {
          this.ngOnInit();
        });
      }
    });
  }

  editProduct(id: string) {
    let editDialog = this.modal.open(ModalComponent, {
      height: '447px',
      width: '570px',
      data: {
        title: ' Edit Product',
        delete: false,
        edit: true,
        id: id,
      },
    });

    editDialog.afterClosed().subscribe((data) => {
      if (data) {
        this.http.updateProduct(data, id).subscribe(() => {
          this.ngOnInit();
        });
      }
    });
  }

  deleteProduct(id: string, name: string) {
    let deleteDialog = this.modal.open(ModalComponent, {
      height: '200px',
      width: '570px',
      data: {
        title: `Delete product "${name.slice(0, 10)}" ?`,
        delete: true,
        id: id,
      },
    });

    deleteDialog.afterClosed().subscribe((data) => {
      if (data) {
        this.http.deleteProduct(data).subscribe((data) => {
          this.ngOnInit();
        });
      }
    });
  }
}
