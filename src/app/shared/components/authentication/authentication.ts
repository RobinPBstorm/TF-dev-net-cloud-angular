import { Component, inject } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { StorageService } from '../../../core/services/storage.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-authentication',
  imports: [],
  templateUrl: './authentication.html',
  styleUrl: './authentication.scss',
})
export class Authentication{

  private readonly _authService = inject(AuthService)
  private readonly _storageService = inject(StorageService)


  public get authenticated(){
    return this._storageService.getIsAuth();
  }

  constructor(){
      this._authService.bsAuthenticated$.pipe(takeUntilDestroyed()).subscribe((value) => {
      console.log("auth component: authenticated behavior subject value : ", value);
      if(value) this._storageService.setIsAuth();
      else this._storageService.delIsAuth();
    })
  }

  public logIn(){
    this._authService.logIn();
  }

  public logOut(){
    this._authService.logOut();
  }
}
