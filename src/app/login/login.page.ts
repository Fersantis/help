import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  inputValue: string = '';
  inputValue2: string = '';
  errorMessage: string = '';
  datos: any[] | undefined;
  state: any;

  user: any;

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
  }

  Ingresar() {
    this.apiService.obtenerDatos(this.inputValue, this.inputValue2).subscribe(
      (response: any) => {
        if (response && response.length > 0) {
          const apiNombre = response[0].nombre;
          const apiPassword = response[0].contrasena;

          const userInputNombre = this.inputValue;
          const userInputPassword = this.inputValue2;

          if (apiNombre === userInputNombre && apiPassword === userInputPassword) {
            console.log('Los datos son iguales');
            const userData = {
              nombre: apiNombre,
              password: apiPassword
            };
            this.Irahome();
          } else {
            this.errorMessage = 'Los datos ingresados son incorrectos';
          }
        } else {
          this.errorMessage = 'Usuario no encontrado';
        }
      },
      (error: any) => {
        console.error(error);
        this.errorMessage = 'Error en la autenticación';
      }
    );
  }

  Irahome() {
    console.log('llegue');
    this.router.navigate(['/home']);
  }
}


