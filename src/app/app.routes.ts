import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Demo1 } from './features/demo/pages/demo1/demo1';

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
];
