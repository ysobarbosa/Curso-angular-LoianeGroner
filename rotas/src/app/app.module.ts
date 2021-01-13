import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './login/auth.service';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.guard';
import { AlunoGuard } from './guards/alunos.guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent, PaginaNaoEncontradaComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [AuthService, AuthGuard, CursosGuard, AlunoGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
