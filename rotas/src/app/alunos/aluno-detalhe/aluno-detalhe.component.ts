import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from 'src/app/cursos/cursos.service';
import { Aluno } from '../aluno';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css'],
})
export class AlunoDetalheComponent implements OnInit {
  id: number;
  inscricao: Subscription;
  aluno: any;

  constructor(
    private route: ActivatedRoute,
    private _alunoService: AlunosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.inscricao = this.route.params.subscribe((params: any) => {
    //   this.id = params['id'];
    //   this.aluno = this._alunoService.getAluno(this.id);
    //   if (this.aluno == null) {
    //     this.router.navigate(['/naoEncontrado']);
    //   }
    // });
    console.log('NgOnInit: alunoDetalheComponent');
    this.inscricao = this.route.data.subscribe((info) => {
      console.log('Recebendo obj aluno do resolver');
      this.aluno = info.aluno;
    });
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

  editarContato() {
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }
}
