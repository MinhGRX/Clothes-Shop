import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/components/login/login.component';

const routes: Routes = [
  {
    path: 'sign-in',
    component: LoginComponent,
    title: 'Đăng nhập'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
