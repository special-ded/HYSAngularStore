import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { ProductsComponent } from './components/products/products.component';
import { AuthGuardService } from '../../shared/guard/auth-guard.service';
import { AdministrationComponent } from './components/administration/administration.component';
import { PageNotFoundComponent } from '../errors/components/page-not-found/page-not-found.component';
import { OrdersComponent } from './components/orders/orders.component';

const administrationRoutes: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AdministrationComponent,
    canActivate: [AuthGuardService],
    children: [
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
      {
        path: 'orders',
        pathMatch: 'full',
        component: OrdersComponent,
      },
      {
        path: '**',
        pathMatch: 'full',
        component: PageNotFoundComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(administrationRoutes)],
})
export class AdministrationRoutingModule {}
