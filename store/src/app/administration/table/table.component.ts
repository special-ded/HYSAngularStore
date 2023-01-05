import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, debounceTime } from 'rxjs';
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
  startIndex: number = 0;
  isIdAscending: boolean = true;
  isPriceAscending: boolean = true;
  isNameAscending: boolean = true;
  loading$ = new BehaviorSubject<boolean>(true);
  constructor(
    private filterService: FilterService,
    private modal: MatDialog,
    private http: ProductHttpService,
    private productService: ProductsService,
    public paginatorService: PaginatorService
  ) {}

  ngOnInit(): void {
    this.resetFilter();
    this.productService.generateProducts();
    this.filterService.filteredByPrice$.subscribe((data) => {
      data.length !== 0 ? this.loading$.next(false) : null,
        this.paginatorService.currentPageProducts$.next(data.slice(0, 5));
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

  arrowHandler(): void {
    this.isIdAscending = this.filterService.ascendingId;
    this.isPriceAscending = this.filterService.ascendingPrice;
    this.isNameAscending = this.filterService.ascendingName;
  }

  resetFilter(): void {
    this.filterService.filterByText('');
  }

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
