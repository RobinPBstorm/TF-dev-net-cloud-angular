import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo2',
  imports: [ FormsModule ],
  templateUrl: './demo2.html',
  styleUrl: './demo2.scss',
})
export class Demo2 {
  name: string = 'Adam';
  name2: string = 'Quentin';

  isClickable: boolean = false;

  editClickable(): void {
    this.isClickable = !this.isClickable;
  }

  updateName2(event: Event): void {
    // console.log('event :>> ', event);
    // console.log('event.target :>> ', event.target);
    // console.log('event.target.value :>> ', (event.target as HTMLInputElement).value);
    this.name2 = (event.target as HTMLInputElement).value;
  }
}
