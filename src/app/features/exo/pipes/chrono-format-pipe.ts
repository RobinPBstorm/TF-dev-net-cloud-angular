import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chronoFormat'
})
export class ChronoFormatPipe implements PipeTransform {

  /**
   * Transformer un nombre brut de seconde en "xx minutes xx secondes"
   * 
   * @param value nombre total de seconde en entrée
   * @param args 
   * @returns temps formatté
   */
  transform(value: number, ...args: unknown[]): string {

    let minutes = Math.floor(value / 60);
    let secondes = value % 60;


    return `${(minutes < 10 ? '0' + minutes: minutes)} minutes ${(secondes < 10 ? '0' + secondes : secondes)} secondes`;
  }

}
