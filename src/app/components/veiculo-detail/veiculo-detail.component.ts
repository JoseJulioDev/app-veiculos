import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VeiculoService } from '../../services/veiculo.service';

@Component({
  selector: 'app-veiculo-detail',
  templateUrl: './veiculo-detail.component.html',
  styleUrls: ['./veiculo-detail.component.css']
})
export class VeiculoDetailComponent implements OnInit {
  veiculo: any = {};

  constructor(
    private route: ActivatedRoute,
    private veiculoService: VeiculoService
  ) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam !== null ? +idParam : 0; 
    this.veiculoService.obterVeiculo(id).subscribe((data: any) => {
      this.veiculo = data;
    });
  }
}
