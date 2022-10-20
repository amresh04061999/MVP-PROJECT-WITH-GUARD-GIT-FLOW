import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { UserService } from '../service/user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-form-container',
  templateUrl: './user-form-container.component.html',
  styleUrls: ['./user-form-container.component.scss']
})
export class UserFormContainerComponent implements OnInit {

  constructor(private usersevices: UserService) { }

  ngOnInit(): void {
  }

  /**
   * Add user Deatils in json server
   * @param user
   */
  public addUser(user: User): void {
    this.usersevices.CreateUser(user).subscribe(response => {
      console.log(response)
    });
  }
}
