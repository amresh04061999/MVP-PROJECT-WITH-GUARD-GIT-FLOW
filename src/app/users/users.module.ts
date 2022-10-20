import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UserFormContainerComponent } from './user-form-container/user-form-container.component';
import { UserFormPresentationComponent } from './user-form-container/user-form-presentation/user-form-presentation.component';
import { UserListContainerComponent } from './user-list-container/user-list-container.component';
import { UserListPresentationComponent } from './user-list-container/user-list-presentation/user-list-presentation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserFormPresenterService } from './user-form-container/user-form-presenter/user-form-presenter.service';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './service/user.service';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    UserFormContainerComponent,
    UserFormPresentationComponent,
    UserListContainerComponent,
    UserListPresentationComponent,

  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [UserService]
})
export class UsersModule { }
