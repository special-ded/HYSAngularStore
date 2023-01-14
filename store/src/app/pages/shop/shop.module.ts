import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { ButtonComponent } from './components/button/button.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsRoutingModule } from './shop-routing.module';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { AdministrationModule } from '../administration/administration.module';
import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './components/shop/shop.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { GlobalSearchComponent } from './components/global-search/global-search.component';
import {
  MatFormFieldModule,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    ProductCardComponent,
    ProductInfoComponent,
    ButtonComponent,
    ShopComponent,
    ProductsListComponent,
    CartComponent,
    TooltipComponent,
    HomeComponent,
    GlobalSearchComponent,
  ],
  imports: [
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    ProductsRoutingModule,
    AdministrationModule,
    SharedModule,
  ],
  exports: [],
})
export class ShopModule {}
