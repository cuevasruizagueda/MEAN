import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  private apiUrl = 'http://localhost:4000/api/productos/consulta/promedio';

  constructor(private http: HttpClient) { }

  obtenerAgregacion(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  
}
