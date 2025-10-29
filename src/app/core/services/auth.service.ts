import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isAuthenticated: boolean = true;

  get isAuthenticated() {
    return this._isAuthenticated;
  }

  logIn(): void {
    this._isAuthenticated = true;
  }

  logOut(): void {
    this._isAuthenticated = false;
  }

}
