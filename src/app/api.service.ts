import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private apiUrl = 'http://127.0.0.1:5000';  // URL base de la API Flask

  constructor(private http: HttpClient) {}

  obtenerDatos(nombre: string, password: string): Observable<any> {
    const url = `${this.apiUrl}/login`;
    return this.http.post(url, { nombre, password });
  }

  getCambioMoneda(codigo: string): Observable<any> {
    const url = `${this.apiUrl}/CambioMoneda?codigo=${codigo}`;
    return this.http.get<any>(url);
  }
}


