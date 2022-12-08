import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductInfoComponent } from './product-info/product-info.component';
import { ProductsComponent } from './products.component';
import { ProductsListComponent } from './products-list/products-list.component';

const productsRoutes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      {
        path: ':Id',
        pathMatch: 'full',
        component: ProductInfoComponent
      },
      {
        path: 'products-list',
        pathMatch: 'full',
        component: ProductsListComponent
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(productsRoutes)
  ]
})
export class ProductsRoutingModule { }
