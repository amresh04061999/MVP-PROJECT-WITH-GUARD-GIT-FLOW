import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../user.model';

@Injectable()
export class UserService {

  public baseURL: string
  constructor(private _http: HttpClient) {
    this.baseURL = "http://localhost:3000/"
  }
  /**
     * Create a new user using post method of http client
     */
  public CreateUser(user: User): Observable<User> {
    return this._http.post<User>(`${this.baseURL}user`, user);
  }

}
