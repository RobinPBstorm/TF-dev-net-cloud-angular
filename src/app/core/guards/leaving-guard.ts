import { CanDeactivateFn } from '@angular/router';

export const leavingGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return confirm("Voulez-vous partir ?");
};
