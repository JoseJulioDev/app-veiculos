import { Component, OnInit } from '@angular/core';
import { VeiculoService } from '../../services/veiculo.service';

@Component({
  selector: 'app-veiculo-list-nao-vendido',
  templateUrl: './veiculo-list-nao-vendido.component.html',
  styleUrls: ['./veiculo-list-nao-vendido.component.css']
})
export class VeiculoListNaoVendidoComponent implements OnInit {

  quantidadeVeiculosNaoVendidos: number = 0;

  constructor(private veiculoService: VeiculoService) { }

  ngOnInit(): void {
    this.carregarQuantidadeVeiculosNaoVendidos();
  }

  carregarQuantidadeVeiculosNaoVendidos(): void {
    this.veiculoService.listarVeiculosNaoVendidos()
      .subscribe(quantidade => this.quantidadeVeiculosNaoVendidos = quantidade);
  }

}
