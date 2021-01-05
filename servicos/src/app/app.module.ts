import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosService } from './cursos/cursos.service';
import {CriarCursosModule} from './criar-curso/criar-curso.module'
import {CursosModule} from './cursos/cursos.module';
import { ReceberCursoCriadoComponent } from './receber-curso-criado/receber-curso-criado.component'
import { LogService } from './shared/log.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CriarCursosModule,
    CursosModule
  ],
  providers: [LogService],
  // providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
