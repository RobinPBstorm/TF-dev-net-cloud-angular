import { Component } from '@angular/core';
import { Exo3Article } from '../../components/exo3-article/exo3-article';
import { Exo3List } from '../../components/exo3-list/exo3-list';

@Component({
  selector: 'app-exo3',
  imports: [Exo3Article, Exo3List],
  templateUrl: './exo3.html',
  styleUrl: './exo3.scss',
})
export class Exo3 {
  articles: string[] = [];

  ajouterArticle(value: string) {
    this.articles.push(value);
  }
  retirerArticle(index: number) {
    this.articles.splice(index,1);
  }
}
