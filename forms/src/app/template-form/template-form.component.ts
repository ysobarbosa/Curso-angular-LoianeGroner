import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css'],
})
export class TemplateFormComponent implements OnInit {
  usuario: any = {
    nome: null,
    email: null,
  };
  constructor() {}

  ngOnInit(): void {}

  onSubmit(form) {
    console.log(form);
    // console.log(this.usuario);
  }

  verificaValidTouched(campo) {
    return !campo.valid && campo.touched;
  }
  aplicaCssErro(campo) {
    return {
      'is-invalid': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo),
    };
  }
}
