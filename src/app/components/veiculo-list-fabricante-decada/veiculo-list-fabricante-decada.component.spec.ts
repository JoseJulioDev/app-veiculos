import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculoListMarcaDecadaComponent } from './veiculo-list-fabricante-decada.component';

describe('VeiculoListMarcaDecadaComponent', () => {
  let component: VeiculoListMarcaDecadaComponent;
  let fixture: ComponentFixture<VeiculoListMarcaDecadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeiculoListMarcaDecadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeiculoListMarcaDecadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
