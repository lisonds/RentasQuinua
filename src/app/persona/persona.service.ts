import { Injectable } from '@angular/core';
import { Persona } from './persona';
import {PERSON} from './persona.json'
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private urlEndPoint:string="http://localhost:8080/api/personas";

  private httpHeaders=new HttpHeaders({'Content-Type':'application/json'})

  constructor(private http:HttpClient) { }
  //SE IMPLEMENTA LISTAR DEL BACKEND
  getPersona():Observable<Persona[]>{
    return this.http.get<Persona[]>(this.urlEndPoint)
  }
  //IMPLEMENTAR GUARDAR DEL FORMULARIO/PERSONA
  create(persona:Persona ):Observable<Persona>{
    return this.http.post<Persona>(this.urlEndPoint,persona,{headers:this.httpHeaders})
  }
}
