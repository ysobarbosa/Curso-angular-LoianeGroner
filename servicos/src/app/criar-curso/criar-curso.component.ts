import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css'],
  providers: [CursosService]
})
export class CriarCursoComponent implements OnInit {

  cursos: string[] = [];

  constructor(private _cursosService: CursosService) { }

  ngOnInit(): void {
    this.cursos = this._cursosService.getCursos();
  }

 /*
    Mesmo sem o componente cursos chamar esse método, a listagem do outro componente atualiza os valores também, porque o provider que está sendo chamado é do app module 
  */
 
 criarCurso(curso: string) {
    this._cursosService.addCurso(curso);
  }

}
