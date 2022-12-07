import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsRoutingModule } from './products-routing/products-routing.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    loadChildren: () => import('./products-routing/products-routing.module')
      .then((m) => ProductsRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
