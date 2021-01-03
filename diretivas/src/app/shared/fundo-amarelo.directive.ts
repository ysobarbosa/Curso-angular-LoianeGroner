import { Directive, ElementRef, Renderer2, RendererFactory2 } from '@angular/core';

@Directive({
  selector: 'p[fundoAmareloDirective]'
})
export class FundoAmareloDirective {

  constructor(private _elementRef: ElementRef,
    private _renderer: Renderer2) {
    // this._elementRef.nativeElement.style.backgroundColor = 'yellow'
    console.log(this._renderer.setStyle)
    this._renderer.setStyle(this._elementRef.nativeElement,
      'background-color', 'yellow')
    

   }

}
