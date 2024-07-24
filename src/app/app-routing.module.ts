import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VeiculoListComponent } from './components/veiculo-list/veiculo-list.component';
import { VeiculoFormComponent } from './components/veiculo-form/veiculo-form.component';
import { VeiculoDetailComponent } from './components/veiculo-detail/veiculo-detail.component';
import { VeiculoListNaoVendidoComponent } from './components/veiculo-list-nao-vendido/veiculo-list-nao-vendido.component';
import { VeiculoListMarcaDecadaComponent } from './components/veiculo-list-fabricante-decada/veiculo-list-fabricante-decada.component';
import { VeiculoListRegistradosUltimaSemanaComponent } from './components/veiculo-list-registrados-ultima-semana/veiculo-list-registrados-ultima-semana.component';

const routes: Routes = [
  { path: '', component: VeiculoListComponent },
  { path: 'add', component: VeiculoFormComponent },
  { path: 'edit/:id', component: VeiculoFormComponent },
  { path: 'detail/:id', component: VeiculoDetailComponent },
  { path: 'listar-veiculos-nao-vendidos', component: VeiculoListNaoVendidoComponent },
  { path: 'listar-veiculos-por-decada', component: VeiculoListMarcaDecadaComponent },
  { path: 'listar-veiculos-por-fabricante', component: VeiculoListMarcaDecadaComponent },
  { path: 'listar-veiculos-ultima-semana', component: VeiculoListRegistradosUltimaSemanaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
