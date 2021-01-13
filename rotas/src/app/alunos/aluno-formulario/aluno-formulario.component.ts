import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IFormCanDeactivate } from 'src/app/guards/iform-candeactivate';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-formulario',
  templateUrl: './aluno-formulario.component.html',
  styleUrls: ['./aluno-formulario.component.css'],
})
export class AlunoFormularioComponent implements OnInit, IFormCanDeactivate {
  aluno: any = {};
  inscricao: Subscription;
  private formMudou: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private _alunoService: AlunosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe((params: any) => {
      let id = params['id'];

      this.aluno = this._alunoService.getAluno(id);

      if (this.aluno === null) {
        this.aluno = {};
      }
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.inscricao.unsubscribe();
  }

  onInput() {
    this.formMudou = true;
    console.log('mudou');
  }

  podeMudarRota() {
    if (this.formMudou) {
      confirm('Tem cetreza?');
    }
    return true;
  }

  podeDesativar() {
    return this.podeMudarRota();
  }
}
