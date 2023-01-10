import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { FilterService } from '../../services/filter.service';
import {
  CreateOrder,
  Order,
  UpdateOrder,
} from 'src/app/shared/interfaces/order.interface';
import { OrderHttpService } from 'src/app/shared/services/order-http.service';
import { UserModalComponent } from '../user-modal/user-modal.component';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss'],
})
export class OrdersTableComponent implements OnInit {
  orders: Order[] = [];
  currentPageOrders: Order[] = [];
  currentPage: number = 1;
  totalPages: number = 0;
  startIndex: number = 0;
  isPriceAscending: boolean = true;
  isNameAscending: boolean = true;
  loading$ = new BehaviorSubject<boolean>(true);

  constructor(
    private filterService: FilterService,
    private modal: MatDialog,
    private orderHttp: OrderHttpService
  ) {}

  ngOnInit(): void {
    this.resetFilter();

    this.orderHttp.getList<Order[]>().subscribe((data) => {
      this.loading$.next(!data.length), console.log(data);

      (this.orders = data), this.pageHandler(data), this.arrowHandler();
    });
  }

  sortByPrice(): void {
    this.filterService.sortByPrice();
  }
  sortByName(): void {
    this.filterService.sortByName();
  }

  pageHandler(data: Order[]): void {
    (this.totalPages = Math.ceil(data.length / 5)),
      (this.currentPageOrders = this.orders.slice(0, 5)),
      (this.currentPage = 1),
      (this.startIndex = 0);
  }

  arrowHandler(): void {
    this.isPriceAscending = this.filterService.ascendingPrice;
    this.isNameAscending = this.filterService.ascendingName;
  }

  resetFilter(): void {
    this.filterService.filterByText('');
  }

  nextPage(): void {
    if (this.currentPage >= Math.ceil(this.orders.length / 5)) {
      return;
    }

    this.currentPage++;
    this.currentPageOrders = this.orders.slice(
      (this.startIndex += 5),
      5 * this.currentPage
    );
  }

  prevPage(): void {
    if (this.currentPage === 1) {
      return;
    }

    this.currentPage--;
    this.currentPageOrders = this.orders.slice(
      (this.startIndex -= 5),
      5 * this.currentPage
    );
  }

  add() {
    let addDialog = this.modal.open(UserModalComponent, {
      height: '447px',
      width: '570px',
      data: {
        title: 'Add User ',
        delete: false,
      },
    });

    addDialog.afterClosed().subscribe((data) => {
      let createdUser: CreateOrder = {
        name: data,
        phone: data,
        message: data,
        products: data,
      };
      this.orderHttp.create<CreateOrder>(createdUser).subscribe(() => {
        this.ngOnInit();
      });
    });
  }

  editProduct(id: string) {
    let editDialog = this.modal.open(UserModalComponent, {
      height: '347px',
      width: '570px',
      data: {
        title: ' Edit User',
        delete: false,
        edit: true,
        id: id,
      },
    });

    editDialog.afterClosed().subscribe((data) => {
      console.log(data);
      let updatedUser: UpdateOrder = {
        name: data,
        phone: data,
        message: data,
        products: data,
      };

      this.orderHttp.update<UpdateOrder>(updatedUser, id).subscribe(() => {
        this.ngOnInit();
      });
    });
  }

  deleteProduct(id: string, name: string) {
    let deleteDialog = this.modal.open(UserModalComponent, {
      height: '200px',
      width: '570px',
      data: {
        title: `Delete User "${name}" ?`,
        delete: true,
        id: id,
      },
    });

    deleteDialog.afterClosed().subscribe((data) => {
      this.orderHttp.delete(data).subscribe(() => {
        this.ngOnInit();
      });
    });
  }
}
