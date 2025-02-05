import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './components/orders/orders.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { DeliveryComponent } from './components/delivery/delivery.component';

const routes: Routes = [
  {
    path: '',
    component: OrdersComponent,
    title: 'Đơn hàng'
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    title: 'Thanh toán'
  },
  {
    path: 'delivery',
    component: DeliveryComponent,
    title: 'Giao hàng'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
