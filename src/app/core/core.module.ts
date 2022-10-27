import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { UsersModule } from '../users/users.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './auth/auth.guard';
import { LoginGuard } from './auth/login.guard';
@NgModule({
  declarations: [
    HeaderComponent,
    LoginFormComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    UsersModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    LoginFormComponent,
    FooterComponent
  ],
  providers: [AuthGuard, LoginGuard]
})
export class CoreModule { }
