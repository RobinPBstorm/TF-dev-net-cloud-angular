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

  isClickable: boolean = false;

  editClickable(): void {
    this.isClickable = !this.isClickable;
  }
}
