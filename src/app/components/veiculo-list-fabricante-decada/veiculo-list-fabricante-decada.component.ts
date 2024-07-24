import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VeiculoService } from '../../services/veiculo.service';
import { ConsultaVeiculoDTO } from '../../dto/consulta-veiculo-dto';

@Component({
  selector: 'app-veiculo-list-fabricante-decada',
  templateUrl: './veiculo-list-fabricante-decada.component.html',
  styleUrls: ['./veiculo-list-fabricante-decada.component.css']
})
export class VeiculoListMarcaDecadaComponent implements OnInit {

  listaVeiculos: ConsultaVeiculoDTO[] = [];
  tituloLista: string = '';

  constructor(
    private route: ActivatedRoute,
    private veiculoService: VeiculoService
  ) {}

  ngOnInit(): void {
    // Detecta a rota atual e carrega os dados apropriados
    this.route.url.subscribe(urlSegments => {
      const rota = urlSegments[0].path; // Obtém o caminho da rota atual

      if (rota === 'listar-veiculos-por-decada') {
        this.carregarListaVeiculosPorDecada();
      } else if (rota === 'listar-veiculos-por-fabricante') {
        this.carregarListaVeiculosPorMarca();
      }
    });
  }

  carregarListaVeiculosPorDecada(): void {
    this.veiculoService.listarQtdVeiculosPorDecada()
      .subscribe(
        (data: ConsultaVeiculoDTO[]) => {
          this.listaVeiculos = data;
          this.tituloLista = 'Quantidade de Veículos por Década';
        },
        (error) => {
          console.error('Erro ao carregar lista de veículos por década:', error);
        }
      );
  }

  carregarListaVeiculosPorMarca(): void {
    this.veiculoService.listarQtdVeiculosPorFabricante()
      .subscribe(
        (data: ConsultaVeiculoDTO[]) => {
          this.listaVeiculos = data;
          this.tituloLista = 'Quantidade de Veículos por Fabricante';
        },
        (error) => {
          console.error('Erro ao carregar lista de veículos por marca:', error);
        }
      );
  }
}
