import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationRoutingModule } from './administration-routing.module';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { AdministrationComponent } from './administration.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TableComponent } from './table/table.component';
import { SpinnerComponent } from '../shared/components/spinner/spinner.component';
import { SearchComponent } from './search/search.component';
import { PriceFilterComponent } from './price-filter/price-filter.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ProductModalComponent } from './product-modal/product-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersTableComponent } from './users-table/users-table.component';
import { UserModalComponent } from './user-modal/user-modal.component';
import { PaginatorComponent } from './paginator/paginator.component';

@NgModule({
  declarations: [
    UsersComponent,
    ProductsComponent,
    AdministrationComponent,
    SidebarComponent,
    TableComponent,
    UsersTableComponent,
    SpinnerComponent,
    SearchComponent,
    PriceFilterComponent,
    ProductModalComponent,
    UserModalComponent,
    PaginatorComponent,
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    RouterModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],
  exports: [SpinnerComponent],
})
export class AdministrationModule {}
