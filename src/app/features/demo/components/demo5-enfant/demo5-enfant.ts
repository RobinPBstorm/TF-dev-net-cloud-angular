import { Component, EventEmitter, input, InputSignal, output, OutputEmitterRef } from '@angular/core';

@Component({
  selector: 'app-demo5-enfant',
  imports: [],
  templateUrl: './demo5-enfant.html',
  styleUrl: './demo5-enfant.scss',
})
export class Demo5Enfant {
  // Input
  id: InputSignal<number> = input(0);
  product: InputSignal<string> = input('');

  // Ancienne notation
  //@Input() product: string;

  //Output
  dupliquer: OutputEmitterRef<number> = output();

  // Ancienne notation
  // @Output() dupliquer: EventEmitter<number> = new EventEmitter()


  confirmDupliquer(value: number){
    this.dupliquer.emit(value);
  }
}
