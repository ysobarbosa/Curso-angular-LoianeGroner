import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private _authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    console.log('authguard');
    return this.verificarAcesso();
  }

  private verificarAcesso() {
    if (this._authService.usuarioEstaAutenticado()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    console.log('canLoad: Verificando se o usuario pode acessar a rota');
    return this.verificarAcesso();
  }
}
