import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasListaComponent } from './ventas-lista.component';

describe('VentasListaComponent', () => {
  let component: VentasListaComponent;
  let fixture: ComponentFixture<VentasListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentasListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentasListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
