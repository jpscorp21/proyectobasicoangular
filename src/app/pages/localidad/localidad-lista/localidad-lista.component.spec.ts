import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalidadListaComponent } from './localidad-lista.component';

describe('LocalidadListaComponent', () => {
  let component: LocalidadListaComponent;
  let fixture: ComponentFixture<LocalidadListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalidadListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalidadListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
