import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataFormComponent } from './data-form/data-form.component';
import { FormsModule } from '@angular/forms';
import { TemplateFormModule } from './template-form/template-form.module';

@NgModule({
  declarations: [AppComponent, DataFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    TemplateFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
