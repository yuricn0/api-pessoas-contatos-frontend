import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarEditarPessoasComponent } from './cadastrar-editar-pessoas.component';

describe('CadastrarEditarPessoasComponent', () => {
  let component: CadastrarEditarPessoasComponent;
  let fixture: ComponentFixture<CadastrarEditarPessoasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarEditarPessoasComponent]
    });
    fixture = TestBed.createComponent(CadastrarEditarPessoasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
