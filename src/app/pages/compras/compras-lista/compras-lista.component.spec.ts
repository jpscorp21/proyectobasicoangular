import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasListaComponent } from './compras-lista.component';

describe('ComprasListaComponent', () => {
  let component: ComprasListaComponent;
  let fixture: ComponentFixture<ComprasListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprasListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprasListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
