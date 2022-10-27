import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogService } from 'src/app/shared/dialog.service';
import { UserService } from 'src/app/users/service/user.service';
import { UserFormContainerComponent } from 'src/app/users/user-form-container/user-form-container.component';
import { User } from 'src/app/users/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  public user: string
  public logingForm: FormGroup
  constructor(
    private fb: FormBuilder,
    private userservices: UserService,
    private authServices: AuthService,
    private route: Router,
    private dilogservices: DialogService
  ) {
    this.logingForm = this.fb.group({
      username: [''],
      password: ['']
    })
    this.user = ' '
  }

  ngOnInit(): void {
  }
  /**
   *login user
   */
  public onlogin() {
    if (this.logingForm.valid) {
      this.userservices.getUser().subscribe((res) => {
        let user = res.find((user: User) => ((user.username === this.logingForm.controls['username'].value) && (user.password === this.logingForm.controls['password'].value)))
        if (user) {
          localStorage.setItem('isAuthentication', 'true')
          localStorage.setItem('user', JSON.stringify(user))
          localStorage.setItem('name', user.username!)
          this.authServices.profileName.next(user.username!)
          this.route.navigate(['users']);
          this.logingForm.reset()
          alert('success')
        } else {
          alert('failed')
        }


      })
    }

  }
  public onSignupOpen() {
    this.dilogservices.open(UserFormContainerComponent)
  }


}
