import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosModule } from './cursos/curso.module';
import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.guard';
import { AlunoGuard } from './guards/alunos.guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

const routes: Routes = [
  {
    path: 'cursos',
    loadChildren: () =>
      import('./cursos/curso.module').then((m) => m.CursosModule),
    canActivate: [AuthGuard],
    canActivateChild: [CursosGuard],
  },
  {
    path: 'alunos',
    loadChildren: () =>
      import('./alunos/alunos.module').then((m) => m.AlunosModule),
    canActivate: [AuthGuard],
    canActivateChild: [AlunoGuard],
    canLoad: [AuthGuard],
  },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '**',
    component: PaginaNaoEncontradaComponent,
    // canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

/*
  lazy loading:
  1 - Colocar o path e o loadChildren do componente
  2 - apagar a referencia do modulo de dentro do app.module
  3 - deixar o path pai;principal vazio dentro do routing do modulo 
*/
