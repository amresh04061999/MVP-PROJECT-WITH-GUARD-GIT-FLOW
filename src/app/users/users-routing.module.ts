import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListContainerComponent } from './user-list-container/user-list-container.component';
import { UsersComponent } from './users.component';

const routes: Routes = [{
  path: '', component: UsersComponent, children: [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: UserListContainerComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
