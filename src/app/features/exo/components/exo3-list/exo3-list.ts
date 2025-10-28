import { Component, input, InputSignal, output, OutputEmitterRef } from '@angular/core';

@Component({
  selector: 'app-exo3-list',
  imports: [],
  templateUrl: './exo3-list.html',
  styleUrl: './exo3-list.scss',
})
export class Exo3List {
  articles: InputSignal<string[]> = input<string[]>([]);

  retirer: OutputEmitterRef<number> = output<number>();

  retirerArticle(index: number) {
    this.retirer.emit(index);
  }
}

