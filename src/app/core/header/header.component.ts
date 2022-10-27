import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { flatMap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() headerNone: EventEmitter<boolean>
  public userProfileName: string
  header: any
  constructor(private router: Router,
    private authServices: AuthService) {
    this.userProfileName = ''
    this.headerNone = new EventEmitter()
  }
  ngOnInit(): void {
    this.authServices.profileName.subscribe(res => {
      this.userProfileName = res
    })
    let auth = localStorage.getItem('isAuthentication')
    if (auth) {
      this.header = true
    } else {
      this.header = false
    }
  }
  /**
   * logout user
   */
  public logout() {
    localStorage.clear();
    this.router.navigate(['login'])
    this.headerNone.emit(false)
  }

}



