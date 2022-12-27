import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { ButtonComponent } from './components/button/button.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from '../shared/components/page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { HryvniaPipePipe } from '../shared/pipes/hryvnia-pipe.pipe';
import { ColorPriceDirective } from '../shared/directives/color-price.directive';
import { ProductsComponent } from './products.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsRoutingModule } from './products-routing.module';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { AdministrationModule } from '../administration/administration.module';

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
    TooltipComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ProductsRoutingModule,
    AdministrationModule,
  ],
})
export class ProductsModule {}
