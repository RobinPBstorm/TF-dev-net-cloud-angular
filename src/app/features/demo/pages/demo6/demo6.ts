import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-demo6',
  imports: [],
  templateUrl: './demo6.html',
  styleUrl: './demo6.scss',
})
export class Demo6 implements OnInit {
  
  authenticated: boolean = false;

  // Injection de dépendance
  // constructor(private _authService: AuthService) { }

  private _authService: AuthService = inject(AuthService);

  ngOnInit(): void {
    this.authenticated = this._authService.isAuthenticated;
  }
  
  login() {
    this._authService.logIn();
    this.authenticated = this._authService.isAuthenticated;
  }

  logout() {
    this._authService.logOut();
    this.authenticated = this._authService.isAuthenticated;
  }
}
