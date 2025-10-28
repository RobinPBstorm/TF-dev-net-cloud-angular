import { Directive, ElementRef, HostListener, input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class Highlight {
  // le nom correspond au selecteur
  appHighlight = input('');

  // Injection de dépendance
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    if (!this.appHighlight()){
      this.el.nativeElement.style.backgroundColor = 'yellow';
    } else {
      this.el.nativeElement.style.backgroundColor = this.appHighlight();
    }
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = 'transparent';
  }
}
