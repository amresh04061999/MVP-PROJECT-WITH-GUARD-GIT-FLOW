import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserFormContainerComponent } from './user-form-container/user-form-container.component';
import { UserFormPresentationComponent } from './user-form-container/user-form-presentation/user-form-presentation.component';
import { UserListContainerComponent } from './user-list-container/user-list-container.component';
import { UserListPresentationComponent } from './user-list-container/user-list-presentation/user-list-presentation.component';


@NgModule({
  declarations: [
    UsersComponent,
    UserFormContainerComponent,
    UserFormPresentationComponent,
    UserListContainerComponent,
    UserListPresentationComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
