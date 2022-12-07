import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingRoutingModule } from './landing/landing-routing.module';
import { PageNotFoundComponent } from './products/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    loadChildren: () => import('./landing/landing-routing.module')
      .then((m) => LandingRoutingModule)
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
