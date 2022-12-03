import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { ButtonComponent } from './product-card/button/button.component';
import { ProductsComponent } from './products.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductCardComponent,
    ButtonComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
