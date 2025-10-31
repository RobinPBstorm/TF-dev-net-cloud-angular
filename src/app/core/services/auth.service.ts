import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly _storageSercice = inject(StorageService)
  private readonly _bsAuthenticated$ = new BehaviorSubject<boolean>(this._storageSercice.getIsAuth())
  public readonly bsAuthenticated$ = this._bsAuthenticated$.asObservable();

  logIn(): void {
    this._bsAuthenticated$.next(true);
  }

  logOut(): void {
    this._bsAuthenticated$.next(false);
  }

}
