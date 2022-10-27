import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public profileName: Subject<string>
  public authsubject: BehaviorSubject<boolean>

  constructor(private router: Router) {
    this.profileName = new Subject();
    this.authsubject = new BehaviorSubject(true);
  }
  isAuth() {
    let isAuthentication = localStorage.getItem('isAuthentication')
    if (isAuthentication) {
      this.authsubject.next(true)
      return true
    } else {
      this.authsubject.next(false)
      return false


    }
  }
}
