import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() valorInicial: number = 10;
  constructor() { }

  ngOnInit(): void {
    // Quando o component é inicializado
    console.log('ngOnInit')
  }

  ngOnChanges() {
    // Antes #2 e quando o valor property-binding é atualizado
    console.log('ngOnChanges')
  }

  ngDoCheck() {
    // A cada ciclo de verificação de mudanças
    console.log('ngDoCheck')
  }

  ngAfterContentInit(): void {
    // Depois de inserir conteúdo externo na view
    console.log('AfterContentInit')
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    
  }

  ngAfterContentChecked(): void {
    // A cada verificação de conteúdo inserido
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log('AfterContentChecked')
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit')
  }

  ngAfterViewChecked(): void {
    // A cada verificacacao de conteudo/conteudo filho
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    console.log('AfterViewChecked')
  }

  ngOnDestroy(): void {
    // antes da diretiva/componente ser destruído

    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('OnDestroy')
  }

}
