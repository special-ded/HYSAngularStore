import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { ButtonComponent } from './product-card/button/button.component';
import { ProductsComponent } from './products.component';
import { HeaderComponent } from './header/header.component';
import { HryvniaPipePipe } from './hryvnia-pipe.pipe';
import { ColorPriceDirective } from './color-price.directive';
import { ProductsRoutingModule } from '../products-routing/products-routing.module';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductCardComponent,
    ButtonComponent,
    HeaderComponent,
    HryvniaPipePipe,
    ColorPriceDirective
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
