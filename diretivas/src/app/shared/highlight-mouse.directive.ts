import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlightMouseDirective]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = 'yellow'
    // this._renderer.setStyle(
    //   this._elementRef.nativeElement,
    //   'background-color', 'yellow'
    // );
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = 'white'
    // this._renderer.setStyle(
    //   this._elementRef.nativeElement,
    //   'background-color', 'white'
    // );
  }
  //Descomentar abaixo e dentro dos médotos
  // @HostBinding('style.backgroundColor') backgroundColor: string;

  //Se precisar de manipulação
  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }
  private backgroundColor: string;


  constructor(private _elementRef: ElementRef,
    private _renderer: Renderer2) { }

}
