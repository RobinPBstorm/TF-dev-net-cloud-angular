import { Component, output, OutputEmitterRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exo3-article',
  imports: [ FormsModule ],
  templateUrl: './exo3-article.html',
  styleUrl: './exo3-article.scss',
})
export class Exo3Article {
  article: string = '';

  envoyerArticle: OutputEmitterRef<string> = output<string>()

  ajouterArticle() {
    this.envoyerArticle.emit(this.article);
  }
}
