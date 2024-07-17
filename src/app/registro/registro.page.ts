import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  usuario: string = '';
  password: string = '';
  correo: string = '';

  constructor(private router: Router, private apiService: ApiService) {}

  ngOnInit() {}

  registrarUsuario() {
    const nuevoUsuario = {
      username: this.usuario,
      password: this.password,
      correo: this.correo
    };

    this.apiService.registrarUsuario(nuevoUsuario).subscribe(
      response => {
        console.log('Usuario registrado exitosamente', response);
        this.router.navigate(['/home']);
      },
      error => {
        console.error('Error al registrar usuario', error);
      }
    );
  }
}

