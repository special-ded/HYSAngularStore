import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationRoutingModule } from './administration-routing.module';
import { UsersComponent } from './components/users/users.component';
import { ProductsComponent } from './components/products/products.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { SearchComponent } from './components/search/search.component';
import { PriceFilterComponent } from './components/price-filter/price-filter.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ProductModalComponent } from './components/product-modal/product-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { UserModalComponent } from './components/user-modal/user-modal.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { AdministrationComponent } from './components/administration/administration.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { OrderComponent } from './components/order/order.component';
import { OrdersTableComponent } from './components/orders-table/orders-table.component';

@NgModule({
  declarations: [
    UsersComponent,
    ProductsComponent,
    AdministrationComponent,
    SidebarComponent,
    ProductsTableComponent,
    UsersTableComponent,
    SearchComponent,
    PriceFilterComponent,
    ProductModalComponent,
    UserModalComponent,
    PaginatorComponent,
    OrderComponent,
    OrdersTableComponent,
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    RouterModule,
    MatDialogModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [SearchComponent, PriceFilterComponent],
})
export class AdministrationModule {}
