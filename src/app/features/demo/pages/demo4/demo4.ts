import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Highlight } from '../../../../shared/directives/highlight';

@Component({
  selector: 'app-demo4',
  imports: [ CommonModule, FormsModule, Highlight ],
  templateUrl: './demo4.html',
  styleUrl: './demo4.scss',
})
export class Demo4 {
  textColor: string = 'red';

  temperature: number = 14;

  name: string = "Corentin";

  fruits: string[] = [
    "kiwi", "pomme", "litchi", "ananas", "dorian"
  ]
}
