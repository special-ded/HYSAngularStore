import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, debounceTime } from 'rxjs';
import { User } from 'src/app/shared/interfaces/user.interface';
import { FilterService } from '../services/filter.service';
import { UserHttpService } from '../../shared/services/user-http.service';
import { UserModalComponent } from '../user-modal/user-modal.component';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent implements OnInit {
  users: User[] = [];
  currentPageUsers: User[] = [];
  currentPage: number = 1;
  totalPages: number = 0;
  startIndex: number = 0;
  isIdAscending: boolean = true;
  isPriceAscending: boolean = true;
  isNameAscending: boolean = true;
  loading$ = new BehaviorSubject<boolean>(true);

  constructor(
    private filterService: FilterService,
    private modal: MatDialog,
    private userHttp: UserHttpService
  ) {}

  ngOnInit(): void {
    this.resetFilter();

    this.userHttp.getAllUsers().subscribe((data) => {
      data.length !== 0 ? this.loading$.next(false) : null,
        (this.users = data),
        this.pageHandler(data),
        this.arrowHandler();
      console.log(data);
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

  pageHandler(data: User[]): void {
    (this.totalPages = Math.ceil(data.length / 5)),
      (this.currentPageUsers = this.users.slice(0, 5)),
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

  nextPage(): void {
    if (this.currentPage >= Math.ceil(this.users.length / 5)) {
      return;
    }

    this.currentPage++;
    this.currentPageUsers = this.users.slice(
      (this.startIndex += 5),
      5 * this.currentPage
    );
  }

  prevPage(): void {
    if (this.currentPage === 1) {
      return;
    }

    this.currentPage--;
    this.currentPageUsers = this.users.slice(
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
      this.userHttp.createUser(data).subscribe(() => {
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
      this.userHttp.updateUser(data, id).subscribe(() => {
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
      this.userHttp.deleteUser(data).subscribe(() => {
        this.ngOnInit();
      });
    });
  }
}
