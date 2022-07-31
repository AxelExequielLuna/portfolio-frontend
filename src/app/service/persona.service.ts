import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = "http://localhost:8080/api/personas";
  constructor(private http: HttpClient) { }

  public getPersonas(): Observable<persona> {
    return this.http.get<persona>(this.URL+'/traer/perfil');
  }
}