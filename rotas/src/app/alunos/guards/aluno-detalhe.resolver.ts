import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Aluno } from '../aluno';
import { AlunosService } from '../alunos.service';

@Injectable({
  providedIn: 'root',
})
export class AlunoDetalheResolver implements Resolve<Aluno> {
  constructor(private _alunosService: AlunosService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    console.log('resolver');
    let id = route.params['id'];

    return this._alunosService.getAluno(id);
  }
}
