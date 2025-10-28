import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Link } from '../../models/link';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  links: Link[] = [
    new Link("Home","/home",undefined,true),
    new Link("Mes demos",undefined,[
      new Link("Mon premier component","/demo/demo1",undefined,false),
      new Link("Les bindings","/demo/demo2",undefined,false),
      new Link("Le pipes","/demo/demo3",undefined,false),
      new Link("Le directives","/demo/demo4",undefined,false),
    ],true),
    new Link("Mes exercices",undefined,[
      new Link("Le chronomètre","/exo/exo1",undefined,false),
      new Link("La navbar","/exo/exo2",undefined,false),
    ],true),
  ];

  displayHideChildLink(index: number){
    if (this.links[index] && this.links[index].children) {
      for (let child of this.links[index].children){
        child.isVisible = !child.isVisible;
      }
    }
  }
}
