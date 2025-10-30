import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Exo1 } from './features/exo/pages/exo1/exo1';
import { Exo2 } from './features/exo/pages/exo2/exo2';
import { Exo3 } from './features/exo/pages/exo3/exo3';
import { Exo4 } from './features/exo/pages/exo4/exo4';

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
        path: 'exo/exo1',
        component: Exo1,
        title: 'Le chronomètre'
    },
    {
        path: 'exo/exo2',
        component: Exo2,
        title: 'La navbar'
    },
    {
        path: 'exo/exo3',
        component: Exo3,
        title: 'La liste de courses'
    },
    {
        path: 'exo/exo4',
        component: Exo4,
        title: 'La liste de courses (services)'
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
