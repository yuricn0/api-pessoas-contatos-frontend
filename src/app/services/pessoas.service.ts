import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Ipessoas } from '../interfaces/ipessoas';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  url = environment.url;


  constructor(private http:HttpClient) {}

  buscarTodasPessoas(): Observable<Ipessoas[]> {
    console.log("API Funcionando");
    return this.http.get<Ipessoas[]>(this.url);

  }
}
