import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './core/login-form/login-form.component';
const routes: Routes = [
  {
    path: 'login', component: LoginFormComponent
  },
  {
    path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
