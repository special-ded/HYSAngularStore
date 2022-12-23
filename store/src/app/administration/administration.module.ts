import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationRoutingModule } from './administration-routing.module';
import { LoginComponent } from './login/login.component';
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
import { ModalComponent } from './modal/modal.component';




@NgModule({
  declarations: [
    LoginComponent,
    UsersComponent,
    ProductsComponent,
    AdministrationComponent,
    SidebarComponent,
    TableComponent,
    SpinnerComponent,
    SearchComponent,
    PriceFilterComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    RouterModule,
    MatDialogModule
  ],
  exports: [

    SpinnerComponent
  ]
})
export class AdministrationModule { }
