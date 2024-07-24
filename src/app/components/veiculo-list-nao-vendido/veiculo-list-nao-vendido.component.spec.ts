import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculoListNaoVendidoComponent } from './veiculo-list-nao-vendido.component';

describe('VeiculoListNaoVendidoComponent', () => {
  let component: VeiculoListNaoVendidoComponent;
  let fixture: ComponentFixture<VeiculoListNaoVendidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeiculoListNaoVendidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeiculoListNaoVendidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
