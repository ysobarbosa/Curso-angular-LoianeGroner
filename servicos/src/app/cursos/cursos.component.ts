import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [CursosService],
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];
  // cursosService: CursosService;
  
  constructor(private _cursosService: CursosService) {
    // this.cursosService = new CursosService();
    // this.cursosService = _cursosService
  }

  ngOnInit(): void {
    this.cursos = this._cursosService.getCursos();

    CursosService.criouNovoCurso.subscribe(
      curso => this.cursos.push(curso)
    )  
  }

}
