import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private apiUrl = 'http://127.0.0.1:5000';  // URL base de la API Flask

  private urlDivisi = 'https://mindicador.cl/api';

  private accessToken = 'TEST-6482890036916762-071613-1755725f7a0536227a724bdb5c053082-1087871581'; // Tu Access Token de Mercado Pago

  constructor(private http: HttpClient) {}

  obtenerDatos(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const body = { username, password };
    
    return this.http.post(`${this.apiUrl}/login`, body, { headers });
  }
  
  getCambioMoneda(): Observable<any> {
    const url = `${this.urlDivisi}`;
    return this.http.get<any>(url);
  }

  createPaymentPreference(data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.accessToken}`  // Agregar el Access Token en los headers
    });
    return this.http.post(`${this.apiUrl}/create_preference`, data, { headers });
  }

  registrarUsuario(usuario: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(`${this.apiUrl}/register`, usuario, { headers });
  }

  getTools(): Observable<any> {
    return this.http.get(`${this.apiUrl}/tools`);
  }

  actualizarStock(compraData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(`${this.apiUrl}/comprar_herramienta`, compraData, { headers });
  }

  comprarHerramienta(data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(`${this.apiUrl}/comprar_herramienta`, data, { headers });
  }
}






 

