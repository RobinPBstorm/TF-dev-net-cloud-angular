import { Routes } from "@angular/router";
import { Demo1 } from "./pages/demo1/demo1";
import { Demo2 } from "./pages/demo2/demo2";
import { Demo3 } from "./pages/demo3/demo3";
import { Demo4 } from "./pages/demo4/demo4";
import { Demo5 } from "./pages/demo5/demo5";
import { Demo6 } from "./pages/demo6/demo6";
import { MyCompetence } from "./pages/demo7/my-competence/my-competence";
import { MyExperience } from "./pages/demo7/my-experience/my-experience";
import { MyFormation } from "./pages/demo7/my-formation/my-formation";

export const demoRoutes: Routes = [
  {
    path: 'demo1',
    component: Demo1,
    title: 'Mon premier component'
  },
  {
    path: 'demo2',
    component: Demo2,
    title: 'Les bindings'
  },
  {
    path: 'demo3',
    component: Demo3,
    title: 'Les pipes'
  },
  {
    path: 'demo4',
    component: Demo4,
    title: 'Les directives'
  },
  {
    path: 'demo5',
    component: Demo5,
    title: 'Les input / output'
  },
  {
    path: 'demo6',
    component: Demo6,
    title: 'Services et DI'
  },
  {
    path: 'demo7',
    loadComponent: () => import("./pages/demo7/demo7").then(c => c.Demo7),
    title: 'Routing',
    children: [
      { path: 'experiences', component: MyExperience },
      { path: 'formations', component: MyFormation },
      { path: 'competences', component: MyCompetence },
    ]
  },
];
