import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationComponent } from './administration.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { AuthGuardService } from './services/auth-guard.service';

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
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(administrationRoutes)],
})
export class AdministrationRoutingModule {}
