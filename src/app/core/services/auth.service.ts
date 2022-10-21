import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public profileName: Subject<string>

  constructor() {
    this.profileName = new Subject();
  }

  isAuth() {
    let isAuthentication = localStorage.getItem('isAuthentication')
    if (isAuthentication) {
      return true
    } else {
      return false
    }
  }
}
