import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationRoutingModule } from './administration-routing.module';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { AdministrationComponent } from './administration.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    LoginComponent,
    UsersComponent,
    ProductsComponent,
    AdministrationComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    RouterModule
  ]
})
export class AdministrationModule { }
