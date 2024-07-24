import { Component, OnInit } from '@angular/core';
import { VeiculoService } from '../../services/veiculo.service';
import { Veiculo } from '../../models/veiculo';

@Component({
  selector: 'app-veiculo-list-registrados-ultima-semana',
  templateUrl: './veiculo-list-registrados-ultima-semana.component.html',
  styleUrls: ['./veiculo-list-registrados-ultima-semana.component.css']
})
export class VeiculoListRegistradosUltimaSemanaComponent implements OnInit {

  veiculos: Veiculo[] = [];

  constructor(private veiculoService: VeiculoService) { }

  ngOnInit(): void {
    this.carregarVeiculos();
  }

  carregarVeiculos(): void {
    this.veiculoService.listarVeiculosRegistradosNaUltimaSemana()
      .subscribe(
        (data: Veiculo[]) => {
          this.veiculos = data;
        },
        (error) => {
          console.error('Erro ao carregar veículos:', error);
        }
      );
  }

}
