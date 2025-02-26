import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IPessoas } from '../interfaces/ipessoas';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  url = environment.url;


  constructor(private readonly http:HttpClient) {}

  buscarTodasPessoas(): Observable<IPessoas[]> {
    console.log("API Funcionando");
    return this.http.get<IPessoas[]>(this.url);
  }

  buscarPessoaPorId(id: number): Observable<IPessoas> {
    return this.http.get<IPessoas>(`${this.url}/${id}`);
  }

  cadastrarPessoa(pessoa: IPessoas): Observable<IPessoas> {
    return this.http.post<IPessoas>(this.url, pessoa);
  }

  deletarPessoa(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }

  editarPessoa(id: number, pessoa: IPessoas) {
    return this.http.put(`${this.url}/${id}`, pessoa);
  }
}
