import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { firstValueFrom, lastValueFrom } from 'rxjs';

export const isAuthenticatedGuard: CanActivateFn = async (route, state) => {
  const _authService: AuthService = inject(AuthService);
  const _router = inject(Router)

  const authenticated = await firstValueFrom(_authService.bsAuthenticated$);

  if(authenticated) return true;
  else return await _router.navigate(['/']);
};
