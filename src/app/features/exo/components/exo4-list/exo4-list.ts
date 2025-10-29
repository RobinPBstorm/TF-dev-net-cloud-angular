import { Component, input, InputSignal, output, OutputEmitterRef } from '@angular/core';
import { Article } from '../../../../shared/models/article';

@Component({
  selector: 'app-exo4-list',
  imports: [],
  templateUrl: './exo4-list.html',
  styleUrl: './exo4-list.scss',
})
export class Exo4List {
  
  articles: InputSignal<Article[]> = input<Article[]>([]);

  retirer: OutputEmitterRef<number> = output<number>();
  updateQuantity: OutputEmitterRef<{id: number, value:number}> = output<{id: number, value:number}>();

  retirerArticle(id: number) {
    this.retirer.emit(id);
  }

  increase(id: number) {
    this.updateQuantity.emit({ id, value:+1 });
  }
  decrease(id: number) {
    this.updateQuantity.emit({ id, value:-1 });
  }

}
