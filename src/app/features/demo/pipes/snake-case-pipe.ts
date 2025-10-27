import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'snakeCase'
})
export class SnakeCasePipe implements PipeTransform {

  /**
   * Cette méthode est employée par notre pipe pour changer l'affichage de la valeur
   * 
   * @param value La valeur qu'il va recevoir /!\ il faudra faire correpondre les types
   * @param args Les arguments supplémentaire qu'on souhaite passer à notre pipe (exemple: formattage date)
   * @returns La valeur transformée par notre pipe /!\ gérer le type de retour
   */
  transform(value: string, ...args: unknown[]): string {
    value = value.toLowerCase().replaceAll(' ','_');
    return value;
  }

}
