import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WhoWeAreService {

  constructor(private http:HttpClient) { //hay que agregar la importación para que funcione

  }

  getWhoWeAre():Observable<any> // hay que importarlo desde rxjs. Nos permite trabajar de forma asíncrona mientras el servicio espera la respuesta del servidor
  {
    return this.http.get('http://localhost:3000/team') //http es el nombre que le pusimos al servicio en la línea 9 y get es uno de los métodos que tiene
  }
}
