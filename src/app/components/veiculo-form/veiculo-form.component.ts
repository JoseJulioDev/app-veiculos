import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VeiculoService } from '../../services/veiculo.service';

@Component({
  selector: 'app-veiculo-form',
  templateUrl: './veiculo-form.component.html',
  styleUrls: ['./veiculo-form.component.css']
})
export class VeiculoFormComponent implements OnInit {

  veiculoForm: FormGroup;
  id: number = 0

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private veiculoService: VeiculoService
  ) {
    this.veiculoForm = this.formBuilder.group({
      modelo: ['', Validators.required],
      marca: ['', Validators.required],
      ano: ['', Validators.required],
      descricao: [''],
      vendido: [false]
    });
  }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.id = idParam !== null ? +idParam : 0; 

    if (this.id) {
      this.veiculoService.obterVeiculo(this.id).subscribe(
        (veiculo) => {
          this.veiculoForm.patchValue(veiculo);
        },
        (error) => {
          console.error('Erro ao carregar veículo:', error);
        }
      );
    }
  }

  onSubmit(): void {
    if (this.veiculoForm.valid) {
      const veiculo = this.veiculoForm.value;
      if (this.id) {
        this.veiculoService.alterarVeiculo(this.id, veiculo).subscribe(
          () => {
            console.log('Veículo atualizado com sucesso!');
            this.router.navigate(['']);
          },
          (error) => {
            console.error('Erro ao atualizar veículo:', error);
          }
        );
      } else {
        this.veiculoService.cadastrarVeiculo(veiculo).subscribe(
          () => {
            console.log('Veículo adicionado com sucesso!');
            this.router.navigate(['']);
          },
          (error) => {
            console.error('Erro ao adicionar veículo:', error);
          }
        );
      }
    } else {
      console.error('Formulário inválido. Verifique os campos.');
    }
  }

}
