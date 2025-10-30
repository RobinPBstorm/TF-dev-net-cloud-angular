import { Routes } from "@angular/router";
import { Exo1 } from "./pages/exo1/exo1";
import { Exo2 } from "./pages/exo2/exo2";
import { Exo3 } from "./pages/exo3/exo3";
import { Exo4 } from "./pages/exo4/exo4";
import { Exo5 } from "./pages/exo5/exo5";

export const exoRoutes: Routes = [

  {
    path: 'exo1',
    component: Exo1,
    title: 'Le chronomètre'
  },
  {
    path: 'exo2',
    component: Exo2,
    title: 'La navbar'
  },
  {
    path: 'exo3',
    component: Exo3,
    title: 'La liste de courses'
  },
  {
    path: 'exo4',
    component: Exo4,
    title: 'La liste de courses (services)'
  },
  {
    path: 'exo5',
    component: Exo5,
    title: 'Vérificateur d\'âge'
  },

];