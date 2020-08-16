// credit goes here for this idea and code: https://stackblitz.com/edit/angular-material-elevation-hover

import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appElevation]'
})
export class ElevationDirective {

  lowerElevation = 0;
  higherElevation = 4;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {
    this.setElevation(this.lowerElevation);
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    document.body.style.cursor="pointer";
    this.setElevation(this.higherElevation);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    document.body.style.cursor="default";
    this.setElevation(this.lowerElevation);
  }

  setElevation(newElevation: number){
    // clear old elevation classes
    const nativeElement = this.element.nativeElement;
    const classesToRemove = Array.from((<HTMLElement>nativeElement).classList).filter((c) => c.startsWith("mat-elevation-z"));
    for(let c of classesToRemove){
      this.renderer.removeClass(nativeElement, c);
    }

    // add new elevation class with new elevation
    const newClass = `mat-elevation-z${newElevation}`;
    this.renderer.addClass(nativeElement, newClass);
  }

}
