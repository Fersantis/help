import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  obtenerDatos(inputValue: string, inputValue2: string) {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://127.0.0.1:8001';  // URL base de la API Flask

  constructor(private http: HttpClient) {}

  getCambioMoneda(codigo: string): Observable<any> {
    const url = `${this.apiUrl}/cambio_moneda?codigo=${codigo}`;
    return this.http.get<any>(url);
  }
}


