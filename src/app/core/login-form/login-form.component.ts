import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/users/service/user.service';
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
  ) {
    this.logingForm = this.fb.group({
      username: [''],
      password: ['']
    })
    this.user = ' '
  }

  ngOnInit(): void {
  }

  public onlogin() {
    this.userservices.getUser().subscribe((res) => {
      let user = res.find((user: User) => ((user.username === this.logingForm.controls['username'].value) && (user.password === this.logingForm.controls['password'].value)))

      if (user) {
        localStorage.setItem('isAuthentication', 'true')
        localStorage.setItem('name', user.username!)
        this.authServices.profileName.next(user.username!)

        this.route.navigate(['users'])
        alert('success')
      } else {
        alert('failed')
      }

    })

  }
}
