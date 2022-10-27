import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'MVP-PROJECT-WITH-GUARD-GIT-FLOW';
  public header: boolean
  constructor(private authServices: AuthService) {
    this.header = false
  }

  ngOnInit(): void {
    this.authServices.authsubject.subscribe(res => {
      if (res) {
        this.header = true
      }
      else {
        this.header = false
      }
    })

    // let auth = localStorage.getItem('isAuthentication')
    // if (auth) {
    //   this.header = true
    // } else {
    //   this.header = false
    // }
  }

  public logout(e: boolean) {
    this.header = e
  }

}
