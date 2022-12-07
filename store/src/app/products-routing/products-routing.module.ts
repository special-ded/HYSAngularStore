import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from '../products/products.component';
import { ProductInfoComponent } from '../products/product-info/product-info.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ProductsComponent
  }, {
    path: 'product-info/:Productname',
    pathMatch: 'full',
    component: ProductInfoComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductsRoutingModule { }
