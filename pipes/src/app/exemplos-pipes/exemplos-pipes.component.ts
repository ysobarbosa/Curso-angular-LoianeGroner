import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Estruturas de Dados e Algoritmos em JavaScript: Aperfeiçoe Suas Habilidades Conhecendo Estruturas de Dados e Algoritmos Clássicos em JavaScript',
    rating: 4.875,
    numeroPaginas: 304,
    preco:  85.92,
    dataLancamento: new Date (2017, 3, 5),
    url: 'https://ler.amazon.com.br/kp/embed?asin=B07P6SZJVQ&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_1Jh9FbE6FKFTC'
  };

  livros: string[] = ['Java', 'Angular 2']
  filtro: string;


  addCurso(valor) {
    this.livros.push(valor);
    console.log(this.livros)
  }  

  obterCursos() {
    if (this.livros.length === 0 || this.filtro === undefined
      || this.filtro.trim() === '') {
        return this.livros;
      }
  
      return this.livros.filter(
         v => v.toLocaleLowerCase().includes(this.filtro.toLocaleLowerCase())
      );
  }

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve ('valor assincrono'), 2000)
  });

  valorAsync2 = interval(2000).pipe(map(valor => 'Valor assíncrono 2'));

  constructor() { }

  ngOnInit(): void {
  }

}
