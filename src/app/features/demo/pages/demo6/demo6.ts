import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';
import { Subscription } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
//import { AsyncPipe } from '@angular/common';
import { StorageService } from '../../../../core/services/storage.service';

@Component({
  selector: 'app-demo6',
  //Async Pipe peut être utilisé pour attacher un observable directement à la vue
  //Le mécanisme de subscription/unsubscribe est géré automatiquement
  // imports: [AsyncPipe],
  imports: [],
  templateUrl: './demo6.html',
  styleUrl: './demo6.scss',
})
export class Demo6 implements OnInit, OnDestroy {

  //authenticated: boolean = false;

  // Injection de dépendance
  // constructor(private _authService: AuthService) { }

  private readonly _authService: AuthService = inject(AuthService);
  private readonly _storageService : StorageService = inject(StorageService)
  public readonly isAuthenticated$ = this._authService.bsAuthenticated$;

  public get authenticated() {
    return this._storageService.getIsAuth();
  }


  // Stocker un souscription à un observable
  //private subscription?:Subscription

  constructor(){
    //TakeUntilDestroyed() va nous permettre d'unsubscribe automatiquement à la
    //Destruction du composant
    this._authService.bsAuthenticated$.pipe(takeUntilDestroyed()).subscribe((value) => {
      console.log("demo6 component: authenticated behavior subject value : ", value);
      if(value) this._storageService.setIsAuth();
      else this._storageService.delIsAuth();
    })
    // console.log("demo6 constructed");
  }

  ngOnInit(): void {
    //  Subscribe à notre behavior Subject et enregistrement de la souscription
    //  this.subscription = this._authService.bsAuthenticated$.subscribe((value) => {
    //   console.log("authenticated behavior subject value : ", value);
    //   this.authenticated = value;
    // })
    // console.log("demo6 init");
  }

  login() {
    this._authService.logIn();

  }

  logout() {
    this._authService.logOut();
  }

  ngOnDestroy(): void {
      //A la destruction du composant unsubscribe de l'éventuelle souscription
      //this.subscription?.unsubscribe();
      // console.log("demo6 component destroyed");
  }

}
