import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EjemploLogginPage } from './ejemplo-loggin.page';

describe('EjemploLogginPage', () => {
  let component: EjemploLogginPage;
  let fixture: ComponentFixture<EjemploLogginPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemploLogginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
