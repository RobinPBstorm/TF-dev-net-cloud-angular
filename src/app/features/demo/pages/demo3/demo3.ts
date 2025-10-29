import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { SnakeCasePipe } from '../../pipes/snake-case-pipe';

@Component({
  selector: 'app-demo3',
  imports: [ UpperCasePipe, DatePipe, SnakeCasePipe, CurrencyPipe ],
  templateUrl: './demo3.html',
  styleUrl: './demo3.scss',
})
export class Demo3 {
  menu: string = 'pâtes';

  today: Date = new Date();

  maVariable: string = 'Hello world';
}
