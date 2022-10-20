import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { DialogService } from 'src/app/shared/dialog.service';
import { User } from '../../user.model';
import { UserFormPresenterService } from '../user-form-presenter/user-form-presenter.service';

@Component({
  selector: 'app-user-form-presentation',
  templateUrl: './user-form-presentation.component.html',
  styleUrls: ['./user-form-presentation.component.scss'],
  viewProviders: [UserFormPresenterService],
})
export class UserFormPresentationComponent implements OnInit {
  public userForm: FormGroup

  @Output() public saveUser: EventEmitter<User>;
  @Output() public addData: EventEmitter<User>;



  @Output() public close: EventEmitter<boolean>;



  constructor(
    private UserFormPresenterServices: UserFormPresenterService,


  ) {
    this.close = new EventEmitter()
    this.saveUser = new EventEmitter();


    this.addData = new EventEmitter();
    this.userForm = this.UserFormPresenterServices.formBuilder()
  }

  ngOnInit(): void {
    /**
     *Emit user using Subject
     */
    this.UserFormPresenterServices.add.subscribe(res => {
      this.addData.emit(res);
    })
  }

  /**
   * Onsubmite save user details
   */
  public onSubmit(): void {
    this.UserFormPresenterServices.saveUser(this.userForm);
  }
  public onclose() {
    this.close.emit
  }

}

