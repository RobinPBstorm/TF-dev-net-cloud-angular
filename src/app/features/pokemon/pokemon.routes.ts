import { Routes } from "@angular/router";

export const pokeRoutes:Routes = [
  {
    path:'',
    loadComponent: () => import("./pages/pokemon-list/pokemon-list").then(p => p.PokemonList)
  }
]
