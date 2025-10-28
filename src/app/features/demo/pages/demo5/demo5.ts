import { Component } from '@angular/core';
import { Demo5Enfant } from '../../components/demo5-enfant/demo5-enfant';

@Component({
  selector: 'app-demo5',
  imports: [Demo5Enfant],
  templateUrl: './demo5.html',
  styleUrl: './demo5.scss',
})
export class Demo5 {
  products = [
    "Kiwi",
    "Café",
    "Sushis"
  ];

  dupliquerProduct(value: number){
    this.products.push (this.products[value]);
  }
}
