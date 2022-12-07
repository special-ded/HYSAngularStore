import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../products/header/header.component';
import { ProductCardComponent } from '../products/product-card/product-card.component';
import { ProductInfoComponent } from '../products/product-info/product-info.component';
import { ButtonComponent } from '../products/product-card/button/button.component';
import { FooterComponent } from '../products/footer/footer.component';
import { PageNotFoundComponent } from '../products/page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { HryvniaPipePipe } from '../products/hryvnia-pipe.pipe';
import { ColorPriceDirective } from '../products/color-price.directive';
import { ProductsComponent } from '../products/products.component';
import { LandingComponent } from './landing.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ProductCardComponent,
    ProductInfoComponent,
    ButtonComponent,
    PageNotFoundComponent,
    HryvniaPipePipe,
    ColorPriceDirective,
    ProductsComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LandingModule { }

