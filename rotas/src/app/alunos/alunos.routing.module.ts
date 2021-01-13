import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlunosDeactvateGuard } from '../guards/aluno-deactivate.guard';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormularioComponent } from './aluno-formulario/aluno-formulario.component';
import { AlunosComponent } from './alunos.component';
import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';

const alunosRoutes = [
  {
    path: '',
    component: AlunosComponent,
    children: [
      { path: 'novo', component: AlunoFormularioComponent },
      {
        path: ':id',
        component: AlunoDetalheComponent,
        resolve: { aluno: AlunoDetalheResolver },
      },
      {
        path: ':id/editar',
        component: AlunoFormularioComponent,
        canDeactivate: [AlunosDeactvateGuard],
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule],
})
export class AlunosRoutingModule {}
