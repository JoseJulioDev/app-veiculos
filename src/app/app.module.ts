import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { VeiculoListComponent } from './components/veiculo-list/veiculo-list.component';
import { VeiculoFormComponent } from './components/veiculo-form/veiculo-form.component';
import { VeiculoDetailComponent } from './components/veiculo-detail/veiculo-detail.component';
import { VeiculoListNaoVendidoComponent } from './components/veiculo-list-nao-vendido/veiculo-list-nao-vendido.component';
import { VeiculoListMarcaDecadaComponent } from './components/veiculo-list-fabricante-decada/veiculo-list-fabricante-decada.component';
import { VeiculoListRegistradosUltimaSemanaComponent } from './components/veiculo-list-registrados-ultima-semana/veiculo-list-registrados-ultima-semana.component';

@NgModule({
  declarations: [
    AppComponent,
    VeiculoListComponent,
    VeiculoFormComponent,
    VeiculoDetailComponent,
    VeiculoListNaoVendidoComponent,
    VeiculoListMarcaDecadaComponent,
    VeiculoListRegistradosUltimaSemanaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
