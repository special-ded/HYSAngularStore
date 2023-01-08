import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationComponent } from './administration.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';

const administrationRoutes: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AdministrationComponent,
    children: [
      {
        path: 'login',
        pathMatch: 'full',
        component: LoginComponent,
      },
      {
        path: 'users',
        pathMatch: 'full',
        component: UsersComponent,
      },
      {
        path: 'products',
        pathMatch: 'full',
        component: ProductsComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(administrationRoutes)],
})
export class AdministrationRoutingModule {}
