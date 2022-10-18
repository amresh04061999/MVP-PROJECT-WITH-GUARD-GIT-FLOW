import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [
    HeaderComponent,
    LoginFormComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule

  ],
  exports: [
    HeaderComponent,
    LoginFormComponent,
    FooterComponent
  ]
})
export class CoreModule { }
