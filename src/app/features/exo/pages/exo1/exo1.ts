import { Component } from '@angular/core';
import { ChronoFormatPipe } from '../../pipes/chrono-format-pipe';

@Component({
  selector: 'app-exo1',
  imports: [ ChronoFormatPipe ],
  templateUrl: './exo1.html',
  styleUrl: './exo1.scss',
})
export class Exo1 {
  secondeTotal: number = 0;

  chronoInterval: number = 0;

  isChronoRunning: boolean = false;

  /**
   * Lance le chrono s'il est stoppé
   * Et le met s'il est en train de fonctionner
   * 
   * Le boolean isChronoRunning est modifié dans le processus
   * 
   * Merci Jean-Baptiste
   */
  StartStop(): void {
    this.isChronoRunning = !this.isChronoRunning;

    if (this.isChronoRunning) {
      this.chronoInterval = setInterval(() => {
        this.secondeTotal ++;
      }, 1000);
    } else {
      clearInterval(this.chronoInterval);
    }
  }

  /**
   * Remet à zero le nombre total de seconde
   */
  Reset(): void {
    this.secondeTotal = 0;
  }
}
