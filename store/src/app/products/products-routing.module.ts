import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './products.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { CartComponent } from './components/cart/cart.component';
import { PageNotFoundComponent } from '../shared/components/page-not-found/page-not-found.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { SpinnerComponent } from '../shared/components/spinner/spinner.component';

const productsRoutes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ProductsListComponent,
      },
      {
        path: 'cart',
        pathMatch: 'full',
        component: CartComponent,
      },
      {
        path: ':id',
        pathMatch: 'full',
        component: ProductInfoComponent,
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
  imports: [CommonModule, RouterModule.forChild(productsRoutes)],
})
export class ProductsRoutingModule {}
