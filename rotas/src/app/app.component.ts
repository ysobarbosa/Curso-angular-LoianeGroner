import { Component } from '@angular/core';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'rotas';

  mostrarMenu: boolean = false;

  constructor(private _authService: AuthService) {}

  ngOnInit(): void {
    this._authService.mostrarMenuEmmiter.subscribe(
      (mostrar) => (this.mostrarMenu = mostrar)
    );
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}
