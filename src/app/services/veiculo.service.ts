import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Veiculo } from '../models/veiculo'; 
import { ConsultaVeiculoDTO } from '../dto/consulta-veiculo-dto';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  private apiUrl = 'http://localhost:8080'; 

  constructor(private http: HttpClient) { }

  obtemVeiculos(): Observable<Veiculo[]> {
    return this.http.get<Veiculo[]>(`${this.apiUrl}/veiculos`);
  }

  obterVeiculo(id: number): Observable<Veiculo> {
    return this.http.get<Veiculo>(`${this.apiUrl}/veiculos/${id}`);
  }

  cadastrarVeiculo(veiculo: Veiculo): Observable<Veiculo> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Veiculo>(`${this.apiUrl}/veiculos`, veiculo, { headers });
  }

  alterarVeiculo(id: number, veiculo: Veiculo): Observable<Veiculo> {
    return this.http.put<Veiculo>(`${this.apiUrl}/veiculos/${id}`, veiculo);
  }

  deletarVeiculo(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/veiculos/${id}`);
  }

  listarVeiculosNaoVendidos(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/veiculos/nao-vendidos`);
  }

  listarQtdVeiculosPorDecada(): Observable<ConsultaVeiculoDTO[]> {
    return this.http.get<ConsultaVeiculoDTO[]>(`${this.apiUrl}/veiculos/por-decada`);
  }

  listarQtdVeiculosPorFabricante(): Observable<ConsultaVeiculoDTO[]> {
    return this.http.get<ConsultaVeiculoDTO[]>(`${this.apiUrl}/veiculos/por-fabricante`);
  }

  listarVeiculosRegistradosNaUltimaSemana(): Observable<Veiculo[]> {
    return this.http.get<Veiculo[]>(`${this.apiUrl}/veiculos/registrados-ultima-semana`);
  }
}
