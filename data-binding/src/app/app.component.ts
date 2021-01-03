import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  deletarCiclo: boolean = false;
  title = 'data-binding';

  valor: number = 5;

  mudarValor() {
    this.valor++
  }
  destruirCiclo() {
    this.deletarCiclo = true;
  }
}
