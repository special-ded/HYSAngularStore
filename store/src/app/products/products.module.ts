import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { ButtonComponent } from './product-card/button/button.component';
import { ProductsComponent } from './products.component';
import { HeaderComponent } from './header/header.component';
import { HryvniaPipePipe } from './hryvnia-pipe.pipe';
import { ColorPriceDirective } from './color-price.directive';
import { ProductInfoComponent } from './product-info/product-info.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductCardComponent,
    ButtonComponent,
    HeaderComponent,
    HryvniaPipePipe,
    ColorPriceDirective,
    ProductInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ProductsModule { }
