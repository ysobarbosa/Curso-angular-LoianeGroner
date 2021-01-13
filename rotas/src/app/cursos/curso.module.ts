import { NgModule } from '@angular/core';

import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './cursos.component';
import { CursosService } from './cursos.service';
import { CommonModule } from '@angular/common';
import { CursosRoutingModule } from './cursos-routing.module';

@NgModule({
  declarations: [
    CursoDetalheComponent,
    CursoNaoEncontradoComponent,
    CursosComponent,
  ],
  imports: [CommonModule, CursosRoutingModule],
  exports: [],
  providers: [CursosService],
})
export class CursosModule {}
