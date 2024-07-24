import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Veiculo } from '../../models/veiculo';
import { VeiculoService } from '../../services/veiculo.service';

@Component({
  selector: 'app-veiculo-list',
  templateUrl: './veiculo-list.component.html',
  styleUrls: ['./veiculo-list.component.css']
})
export class VeiculoListComponent implements OnInit {

  veiculos: Veiculo[] = [];

  constructor(private veiculoService: VeiculoService, private router: Router) { }

  ngOnInit(): void {
    this.carregarVeiculos();
  }

  carregarVeiculos(): void {
    this.veiculoService.obtemVeiculos()
      .subscribe(
        (data: Veiculo[]) => {
          this.veiculos = data;
        },
        (error) => {
          console.error('Erro ao carregar veículos:', error);
        }
      );
  }

  editarVeiculo(id: number): void {
    this.router.navigate(['/edit', id]);
  }

  excluirVeiculo(id: number): void {
    this.veiculoService.deletarVeiculo(id)
      .subscribe(
        () => {
          // Atualiza a lista de veículos após exclusão
          this.carregarVeiculos();
        },
        (error) => {
          console.error('Erro ao excluir veículo:', error);
        }
      );
  }
}
