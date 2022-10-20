import { EventEmitter, Injectable, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { User } from '../../user.model';

@Injectable(

)
export class UserFormPresenterService {
  public add: Subject<User>;
  @Output() public close: EventEmitter<boolean>;
  constructor(private fb: FormBuilder) {
    this.add = new Subject();
    this.close = new EventEmitter()



  }
  /**
   * create form builder
   * @returns
   */
  public formBuilder(): FormGroup {
    return this.fb.group({
      id: [],
      username: ['', Validators.required],
      email: ['', Validators.required],
      phoneno: ['', Validators.required],
      password: ['', Validators.required]
    })

  }
  /**
   * save user deatils
   * @param form
   */
  public saveUser(form: FormGroup): void {
    let user: User = new User();
    user = form.getRawValue();
    // console.log(user);
    this.add.next(user);
  }
  public closeComponent() {
    this.close.emit()
  }
}
