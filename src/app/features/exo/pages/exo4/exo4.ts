import { Component, inject, OnInit } from '@angular/core';
import { Exo4List } from "../../components/exo4-list/exo4-list";
import { Exo4Article } from "../../components/exo4-article/exo4-article";
import { Article } from '../../../../shared/models/article';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-exo4',
  imports: [Exo4List, Exo4Article],
  templateUrl: './exo4.html',
  styleUrl: './exo4.scss',
})
export class Exo4 implements OnInit {
  
  // Injection de dépendance
  private _articleService: ArticleService = inject(ArticleService);

  articles: Article[] = [];

  ngOnInit(): void {
    this.articles = this._articleService.getAllArticles();
  }

  ajouterArticle(value: string) {
    this._articleService.addArticle(value);
    this.articles = this._articleService.getAllArticles();

  }
  retirerArticle(id: number) {
    this._articleService.removeArticle(id)
    this.articles = this._articleService.getAllArticles();
  }

  updateQuantity(data: { id: number, value: number }) {
    if (data.value === 1) this._articleService.increaseArticleQuantity(data.id);
    else this._articleService.decreaseArticleQuantity(data.id);
    this.articles = this._articleService.getAllArticles();
  }
}
