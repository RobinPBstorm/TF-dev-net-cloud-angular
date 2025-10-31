import { Component, inject } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-details',
  imports: [],
  templateUrl: './pokemon-details.html',
  styleUrl: './pokemon-details.scss',
})
export class PokemonDetails {
  private readonly _pokemonService = inject(PokemonService)
  private readonly _activeRoute = inject(ActivatedRoute)

  public pokemon : any = undefined;



  public ngOnInit(): void {
      const name = this._activeRoute.snapshot.params['name'];
      this._pokemonService.getOnePokemonByName(name).subscribe(apiCallResult => {
        console.log("Pokemon Details : ", apiCallResult)
        this.pokemon = apiCallResult;
  });
  }

}
