import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';



@NgModule({
  declarations: [
    HeaderComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
