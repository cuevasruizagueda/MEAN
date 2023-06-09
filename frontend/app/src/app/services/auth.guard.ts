import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {
    // Verificar si el usuario ha iniciado sesión
    if (localStorage.getItem('isLoggedIn')) {
      return true; // Permitir acceso a la ruta
    } else {
      this.router.navigate(['/login']); // Redirigir al componente de inicio de sesión
      return false; // Denegar acceso a la ruta
    }
  }
}
