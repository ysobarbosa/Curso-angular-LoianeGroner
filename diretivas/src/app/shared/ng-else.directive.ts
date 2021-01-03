import { Directive, Input, TemplateRef, ViewContainerRef  } from '@angular/core';

@Directive({
  selector: '[ngElseDirective]'
})
export class NgElseDirective {

  @Input() set ngElseDirective(condition: boolean) {
    if(!condition) {
      this._viewContainerRef.createEmbeddedView(this._templateRef);
    } else {
      this._viewContainerRef.clear();
    }
  }

  constructor(private _templateRef: TemplateRef<any>,
    private _viewContainerRef: ViewContainerRef) { }

}
