import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { ButtonComponent } from './button/button.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from '../shared/components/page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { HryvniaPipePipe } from '../shared/pipes/hryvnia-pipe.pipe';
import { ColorPriceDirective } from '../shared/directives/color-price.directive';
import { ProductsComponent } from './products.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { CartComponent } from './cart/cart.component';
import { ProductsRoutingModule } from './products-routing.module';
import { TooltipComponent } from './tooltip/tooltip.component';


@NgModule({
  providers: [],
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
    ProductsListComponent,
    CartComponent,
    TooltipComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }

