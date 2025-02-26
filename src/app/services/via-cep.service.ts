import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IViaCep } from '../interfaces/iviacep';

@Injectable({
  providedIn: 'root'
})
export class ViaCepService {

  urlViaCep = environment.viaApiUrl;

  constructor(private readonly http:HttpClient) { }

  buscarEndereco(cep: string): Observable<IViaCep> {
    return this.http.get<IViaCep>(`${this.urlViaCep}/${cep}/json`);
  }
}
