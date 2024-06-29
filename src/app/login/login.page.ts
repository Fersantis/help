import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  inputValue: string ='';
  inputValue2: string ='';
  errorMessage: string = '';
  datos: any[] | undefined;
  state: any;

  user: any;

  constructor(private router: Router, private apiService: ApiService,) { }

  ngOnInit() {
  } 

   

  Ingresar() {
      
    this.apiService.obtenerDatos(this.inputValue,this.inputValue2).subscribe(
      (response: any) => {
        const apiUsername = response[0].correo;
        const apiPassword = response[0].contrasena;
        const apirol = response[0].rol;

     
        // Realiza las acciones necesarias con la respuesta de la API
        // Por ejemplo, podrías almacenar los datos del usuario en una variable y pasarlos a la página de inicio
        const userInputUsername = this.inputValue;
        const userInputPassword = this.inputValue2;

      
      // Comparar los datos
      if (apiUsername === userInputUsername && apiPassword === userInputPassword) {
        // Si son iguales, hacer algo
        console.log('Los datos son iguales');
        
    
        // Realiza las acciones necesarias cuando los datos son iguales
        const userData = {
          username: apiUsername,
          password: apiPassword,
          rol:apirol
       
        };
        this.Irahome();
      } else {
        this.errorMessage = 'Los datos ingresados son incorrectos';
      }
    },
    (error: any) => {
      console.error(error);
      // Maneja el error de la solicitud a la API
    }
  );
}

Irahome() {
  console.log('llegue');
  this.router.navigate(['/home']);
}
}

