import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Demo1 } from './features/demo/pages/demo1/demo1';
import { Demo2 } from './features/demo/pages/demo2/demo2';
import { Demo3 } from './features/demo/pages/demo3/demo3';
import { Exo1 } from './features/exo/pages/exo1/exo1';
import { Demo4 } from './features/demo/pages/demo4/demo4';
import { Exo2 } from './features/exo/pages/exo2/exo2';
import { Demo5 } from './features/demo/pages/demo5/demo5';
import { Exo3 } from './features/exo/pages/exo3/exo3';
import { Demo6 } from './features/demo/pages/demo6/demo6';
import { Exo4 } from './features/exo/pages/exo4/exo4';
import { MyExperience } from './features/demo/pages/demo7/my-experience/my-experience';
import { MyFormation } from './features/demo/pages/demo7/my-formation/my-formation';
import { MyCompetence } from './features/demo/pages/demo7/my-competence/my-competence';

export const routes: Routes = [
    {
        path:'home',
        component: Home,
        title: 'ma homepage'
    },
    {
        path:'lazyHome',
        loadComponent:()=>import('./features/home/home').then(m => m.Home),
        title: 'ma homepage en lazymode'
    },
    // Les demos
    {
        path: 'demo/demo1',
        component: Demo1,
        title: 'Mon premier component'
    },
    {
        path: 'demo/demo2',
        component: Demo2,
        title: 'Les bindings'
    },
    {
        path: 'demo/demo3',
        component: Demo3,
        title: 'Les pipes'
    },
    {
        path: 'demo/demo4',
        component: Demo4,
        title: 'Les directives'
    },
    {
        path: 'demo/demo5',
        component: Demo5,
        title: 'Les input / output'
    },
    {
        path: 'demo/demo6',
        component: Demo6,
        title: 'Services et DI'
    },
    {
        path: 'demo/demo7',
        loadComponent: () => import("./features/demo/pages/demo7/demo7").then(c => c.Demo7),
        title: 'Routing',
        children: [
            { path: 'experiences', component: MyExperience },
            { path: 'formations', component: MyFormation },
            { path: 'competences', component: MyCompetence },
        ]
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
