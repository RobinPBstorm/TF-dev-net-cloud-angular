import { inject, Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { HttpClient } from "@angular/common/http";

const BASE_URL = environment.api_url;

@Injectable({providedIn:'root'})
export class PokemonService {

  private readonly _http = inject(HttpClient)


  //{cle: valeur, cle2: valeur, etc...}
  //{valeur, valeur2, valeur3,...}   <=> {valeur: valeur, valeur2: valeur2, valeur3, valeur3}
  //{offset, limit}  <=> {offset: offset, limit: limit}

  public getPokemons(offset:number, limit:number):any{
    //return this._http.get(`${BASE_URL}/pokemon`, {params:{offset: offset, limit: limit}})
    return this._http.get(`${BASE_URL}/pokemon`, {params:{offset, limit}})
  }

  public getOnePokemonByName(pokemonName:string){
     return this._http.get(`${BASE_URL}/pokemon/${pokemonName}`)
  }

}
