import { EventEmitter, Injectable, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { User } from '../../user.model';

@Injectable(

)
export class UserFormPresenterService {
  public add: Subject<User>;
  constructor(private fb: FormBuilder) {
    this.add = new Subject();
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
    if(form.valid){
      let user: User = new User();
      user = form.getRawValue();
      this.add.next(user);
    }
   
  }

    
}
