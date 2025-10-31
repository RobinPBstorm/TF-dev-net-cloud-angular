import { Component, inject, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Router } from '@angular/router';

const OFFSET = 0
const LIMIT = 200

@Component({
  selector: 'app-pokemon-list',
  imports: [],
  templateUrl: './pokemon-list.html',
  styleUrl: './pokemon-list.scss',
})
export class PokemonList implements OnInit {

  private readonly _pokemonService = inject(PokemonService)
  private readonly _router = inject(Router)

  public pokemon : any[] = [];

  public totalCount = 0;
  public offset = OFFSET;
  public limit = LIMIT;
  public hasNext = false;


  public ngOnInit(): void {
      this.getPokemonFromApi(this.offset, this.limit);
  }

  public getPokemonFromApi(offset:number, limit:number){
    this._pokemonService.getPokemons(offset, limit).subscribe(this.handlePokemonsFromQuery.bind(this))

    // this._pokemonService.getPokemons(offset, limit).subscribe(apiResponse => {
    //   console.log("Response api : ", apiResponse)
    //   console.log(this.pokemon)
    //   if(apiResponse && apiResponse.results){
    //     this.totalCount = apiResponse.count??0;
    //     this.pokemon.push(...apiResponse.results)
    //     this.hasNext = apiResponse.next!=null;

    //     if(this.hasNext){
    //       this.offset += this.limit;
    //     }
    //   }
    // })
  }

  public loadMorePokemon(){
    this.getPokemonFromApi(this.offset, this.limit);
  }

  public resetListing(){
    this.pokemon = [...this.pokemon.slice(0,LIMIT)];
    this.offset = LIMIT;

  }

  public async getPokemonByName(pokemonName:string){
    this._router.navigate(['/pokemon', pokemonName])
  }

  //Callback subscribe du call API
  private handlePokemonsFromQuery(apiResponse:any){

    console.log("Response api : ", apiResponse)
    console.log(this.pokemon)
    if(apiResponse && apiResponse.results){
      this.totalCount = apiResponse.count??0;
      this.pokemon.push(...apiResponse.results)
      this.hasNext = apiResponse.next!=null;

      if(this.hasNext){
        this.offset += this.limit;
      }
    }
  }



}
