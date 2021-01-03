import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlightDirective]'
})
export class HighlightDirective {

  @HostListener('mouseover') onMouseOver() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor: string;


  
  @Input() defaultColor: string = 'white';
  @Input('highlightDirective') highlightColor: string = 'yellow';

  constructor() { }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }

}
