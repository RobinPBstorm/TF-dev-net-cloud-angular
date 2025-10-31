import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class StorageService{

  public setIsAuth(){
    sessionStorage.setItem('authenticated', "j'aime les chats et la pizza");
  }

  public delIsAuth(){
    sessionStorage.removeItem('authenticated');
  }

  public getIsAuth(){
    return sessionStorage.getItem('authenticated')!=null;
  }

}
