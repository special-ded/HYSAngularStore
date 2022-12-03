import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { ButtonComponent } from './product-card/button/button.component';
import { ProductsComponent } from './products.component';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductCardComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
