import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppMainComponent } from './layouts/app-main/app-main.component';
import { authGuard } from './core/guards/auth.guard';
import { LoginComponent } from './modules/auth/components/login/components/login/login.component';
import { SignupComponent } from './modules/auth/components/login/components/signup/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: AppMainComponent,
    // canActivate: [authGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/product'
      },
      {
        path: 'dashboard',
        loadChildren: () => 
          import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'product',
        loadChildren: () => 
          import('./modules/products/products.module').then(m => m.ProductsModule)
      },
      {
        path: 'order',
        loadChildren: () => 
          import('./modules/orders/orders.module').then(m => m.OrdersModule)
      },
      {
        path: 'user',
        loadChildren: () => 
          import('./modules/users/users.module').then(m => m.UsersModule)
      },
      {
        path: 'setting',
        loadChildren: () => 
          import('./modules/settings/settings.module').then(m => m.SettingsModule)
      }
    ]
  },
  {
    path: 'auth',
    loadChildren: () => 
       import('./modules/auth/auth.module').then(m => m.AuthModule)    
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
