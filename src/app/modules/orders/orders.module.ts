import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './components/orders/orders.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { OrderConfirmationComponent } from './components/orderconfirmation/orderconfirmation.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    OrdersComponent,
    CheckoutComponent,
    DeliveryComponent,
    OrderConfirmationComponent,
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
  ]
})
export class OrdersModule { }
