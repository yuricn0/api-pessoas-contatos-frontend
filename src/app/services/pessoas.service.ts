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


  constructor(private readonly http:HttpClient) {}

  buscarTodasPessoas(): Observable<Ipessoas[]> {
    console.log("API Funcionando");
    return this.http.get<Ipessoas[]>(this.url);
  }

  buscarPessoaPorId(id: number): Observable<Ipessoas> {
    return this.http.get<Ipessoas>(`${this.url}/${id}`);
  }

  cadastrarPessoa(pessoa: Ipessoas): Observable<Ipessoas> {
    return this.http.post<Ipessoas>(this.url, pessoa);
  }

  deletarPessoa(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }

  editarPessoa(id: number, pessoa: Ipessoas) {
    return this.http.put(`${this.url}/${id}`, pessoa);
  }
}
