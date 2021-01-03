import { Component, OnInit } from '@angular/core';
import {faStar} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-diretiva-ngclass',
  templateUrl: './diretiva-ngclass.component.html',
  styleUrls: ['./diretiva-ngclass.component.scss']
})
export class DiretivaNgclassComponent implements OnInit {

  meuFavorito: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.meuFavorito = !this.meuFavorito;
  }
}
