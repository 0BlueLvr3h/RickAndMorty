import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PulsantePaginaComponent } from './pulsante-pagina.component';

describe('PulsantePaginaComponent', () => {
  let component: PulsantePaginaComponent;
  let fixture: ComponentFixture<PulsantePaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PulsantePaginaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PulsantePaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
