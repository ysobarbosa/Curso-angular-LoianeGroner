import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario: Usuario = new Usuario();

  constructor(private _authService: AuthService) {}

  ngOnInit(): void {}

  fazerLogin() {
    this._authService.fazerLogin(this.usuario);
    console.log(this.usuario);
  }
}
