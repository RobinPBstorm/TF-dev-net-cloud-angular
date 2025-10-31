import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './shared/components/navbar/navbar';
import { Authentication } from "./shared/components/authentication/authentication";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Authentication],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'TF-dev-net-cloud-angular';
}
