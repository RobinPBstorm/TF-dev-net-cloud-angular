import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Demo1 } from './features/demo/pages/demo1/demo1';
import { Demo2 } from './features/demo/pages/demo2/demo2';
import { Demo3 } from './features/demo/pages/demo3/demo3';
import { Exo1 } from './features/exo/pages/exo1/exo1';

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
    // Les exos
    {
        path: 'exo/exo1',
        component: Exo1,
        title: 'Le chronomètre'
    }
];
