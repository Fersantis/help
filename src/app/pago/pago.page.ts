import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.page.html',
  styleUrls: ['./pago.page.scss'],
})
export class PagoPage {
  constructor(private apiService: ApiService, private router: Router) {}

  createTransaction() {
    const paymentData = {
      title: 'Producto de prueba',
      quantity: 1,
      currency_id: 'CLP',
      unit_price: 100.0
    };

    this.apiService.createPaymentPreference(paymentData).subscribe(response => {
      console.log(response);
      if (response && response.response && response.response.sandbox_init_point) {
        window.location.href = response.response.sandbox_init_point;  // Redirecciona al usuario a la URL de aprobación
      } else {
        console.error('La respuesta no tiene la estructura esperada:', response);
      }
    }, error => {
      console.error('Error al crear la preferencia de pago:', error);
    });
  }
}


