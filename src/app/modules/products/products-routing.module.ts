import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListPageComponent } from './product-list-page/product-list-page.component';
import { ProductPageComponent } from './components/product-page.component';
import { ProductListPageGuard } from './product-list-page/product-list-page.guard';
import { ProductPageGuard } from './components/product-page.guard';
import { AppMainComponent } from 'src/app/layouts/app-main/app-main.component';

const routes: Routes = [
  { 
    path: '', 
    component: ProductListPageComponent, 
    pathMatch: 'full', 
    canActivate: [ProductListPageGuard] 
  },
  {
    path: '',
    component: AppMainComponent,
    children: [
      {
        path: 'product/:id',
        component: ProductPageComponent,
        canActivate: [ProductPageGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
