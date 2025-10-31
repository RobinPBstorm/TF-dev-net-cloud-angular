import { Routes } from '@angular/router';
import { Home } from './features/home/home';

export const routes: Routes = [
    {
        path:'home',
        component: Home,
        title: 'ma homepage'
    },
    {
        path:'lazyHome',
        loadComponent:()=>import('./features/home/home')
            .then(m => m.Home),
        title: 'ma homepage en lazymode'
    },
    // Les demos
    {
        path: 'demo',
        loadChildren: () => import('./features/demo/demo.routes')
            .then(r => r.demoRoutes),
        title: 'Angular | Démonstrations'
    },

    // Les exos
    {
        path: 'exo',
        loadChildren: () => import("./features/exo/exo.routes")
            .then(r => r.exoRoutes),
        title: 'Angular | Exercices'
    },

    // Les pokemons
    {
        path: 'pokemon',
        loadChildren: () => import("./features/pokemon/pokemon.routes")
            .then(r => r.pokeRoutes),
        title: 'Angular | Pokemon'

    },

    // Redirection
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },

    // Quand l'uri ne matche avec aucune route
    {
        path: '**',
        loadComponent: () => import('./features/errors/not-found/not-found')
            .then(c => c.NotFound),
        title: 'Angular | Not Found',
    }
];
