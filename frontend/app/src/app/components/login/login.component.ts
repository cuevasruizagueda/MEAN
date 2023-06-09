/*import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}


  login() {
    const userData = { username: this.username, password: this.password };

    // Realizar una solicitud HTTP al backend para iniciar sesión
    this.http.post<any>('http://localhost:4000/api/productos/login', userData).subscribe(
      (response) => {
        // Almacenar el token de acceso en el almacenamiento local
        localStorage.setItem('token', response.token);

        // Redirigir al usuario a la página de inicio o a otro componente
        console.log('Login successful');

        // Después de recibir la respuesta exitosa del servicio
this.router.navigateByUrl('/listar-productos');
        // (agrega tu lógica de redirección aquí)
      },
      (error) => {
        console.error('Error al iniciar sesión:', error);
        // Manejar el error de inicio de sesión (mostrar un mensaje de error, etc.)
      }
    );
  }
}



*/
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = "";
  password: string = "" ;
  loginError: boolean = false;
  loginSuccess: boolean = false; // Nueva propiedad

  constructor(private router: Router) { }

  login() {
    if (this.username === 'root' && this.password === 'root') {
      // Inicio de sesión exitoso
      this.loginSuccess = true; // Mostrar mensaje exitoso
      localStorage.setItem('isLoggedIn', 'true'); // Marcar que ha iniciado sesión

      this.router.navigate(['/listar-producto']);
    } else {
      // Mostrar mensaje de error
      this.loginError = true;
    }
  }
}
