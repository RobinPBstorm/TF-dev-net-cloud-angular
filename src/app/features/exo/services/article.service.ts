import { Injectable } from '@angular/core';
import { Article } from '../../../shared/models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private _articles: Article[] = [
    { id: 1, name: 'Pomme', quantity: 5 },
    { id: 2, name: 'Poire', quantity: 2 },
    { id: 3, name: 'Kiwi', quantity: 1 },
  ];
  private lastId = this._articles.length;

  getAllArticles(): Article[] {
    return [...this._articles];
  }

  removeArticle(id: number): void {
    const articleIdToDelete = this._articles.findIndex(a => a.id === id);
    if (articleIdToDelete !== -1) this._articles.splice(articleIdToDelete, 1);
  }

  addArticle(articleName: string): Article {

    let article = this._articles.find(a => a.name.toLowerCase() === articleName.toLowerCase())

    if (article)
      this.increaseArticleQuantity(article.id)
    else {
      article = {
        id: ++this.lastId,
        name: articleName,
        quantity: 1
      }

      this._articles.push(article);
    }
    return article;
  }

  increaseArticleQuantity(id: number): void {
    const article = this._articles.find(a => a.id === id);
    if (article) article.quantity++;
  }

  decreaseArticleQuantity(id: number): void {
    const article = this._articles.find(a => a.id === id);
    if (article) {
      if (--article.quantity === 0) this.removeArticle(id);
    }
  }

}
