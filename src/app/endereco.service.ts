import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Endereco } from './endereco';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  buscaComFiltro(rua: string, numero: number): Observable<Endereco[]> {
    return this.http.get<Endereco[]>(this.baseUrl + `/enderecos/${rua}` + `/${numero}`);
  }
}
