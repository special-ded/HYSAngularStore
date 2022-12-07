import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductInfoComponent } from '../products/product-info/product-info.component';
import { LandingComponent } from './landing.component';

const productRoutes: Routes = [
  {
    path: '',
    component: LandingComponent
  }
  , {
    path: ':productId',
    pathMatch: 'full',
    children: [
      { path: ':productId', component: ProductInfoComponent },

    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(productRoutes)
  ]
})
export class LandingRoutingModule { }
