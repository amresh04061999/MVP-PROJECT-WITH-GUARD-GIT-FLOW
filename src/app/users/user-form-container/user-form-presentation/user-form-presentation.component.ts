import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
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
  public isSubmited=false
  @Output() public saveUser: EventEmitter<User>;
  @Output() public addData: EventEmitter<User>;
 
  constructor(
    private UserFormPresenterServices: UserFormPresenterService,
    private dialogservise:DialogService

  ) {


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
  public onSubmit(){
    if(this.isSubmited=true){
      this.UserFormPresenterServices.saveUser(this.userForm);
      this.dialogservise.close.next(true)
    }
  }
  /**
   * close model function
   */
  public onclose() {
  this.dialogservise.close.next(true)
  }

    // select data employe form
    get userform(): { [key: string]: AbstractControl } {
      return this.userForm.controls;
    }


}

