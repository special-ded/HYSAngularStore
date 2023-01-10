import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderModalComponent } from './order-modal/order-modal.component';
import { OrdersComponent } from './orders/orders.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdministrationModule } from '../administration.module';
import { OrdersTableComponent } from './orders-table/orders-table.component';

@NgModule({
  declarations: [OrderModalComponent, OrdersComponent, OrdersTableComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    ReactiveFormsModule,
    SharedModule,
    AdministrationModule,
  ],
  exports: [],
})
export class OrdersModule {}
