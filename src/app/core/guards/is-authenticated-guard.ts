import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {

  // const _authService: AuthService = inject(AuthService);
  // return _authService.isAuthenticated;

  return inject(AuthService).isAuthenticated 
    ? true 
    : inject(Router).navigate(['demo/demo6']);
  
};
