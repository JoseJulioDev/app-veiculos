import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculoListRegistradosUltimaSemanaComponent } from './veiculo-list-registrados-ultima-semana.component';

describe('VeiculoListRegistradosUltimaSemanaComponent', () => {
  let component: VeiculoListRegistradosUltimaSemanaComponent;
  let fixture: ComponentFixture<VeiculoListRegistradosUltimaSemanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeiculoListRegistradosUltimaSemanaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeiculoListRegistradosUltimaSemanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
