import { Component, output, OutputEmitterRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exo4-article',
  imports: [FormsModule],
  templateUrl: './exo4-article.html',
  styleUrl: './exo4-article.scss',
})
export class Exo4Article {
  article: string = '';

  envoyerArticle: OutputEmitterRef<string> = output<string>()

  ajouterArticle() {
    this.envoyerArticle.emit(this.article);
  }
}
