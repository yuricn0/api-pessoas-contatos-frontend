import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ipessoas } from 'src/app/interfaces/ipessoas';
import { PessoasService } from 'src/app/services/pessoas.service';

@Component({
  selector: 'app-cadastrar-editar-pessoas',
  templateUrl: './cadastrar-editar-pessoas.component.html',
  styleUrls: ['./cadastrar-editar-pessoas.component.scss']
})
export class CadastrarEditarPessoasComponent {
  formGroupPessoas: FormGroup = new FormGroup({
  nome: new FormControl('', [Validators.required]),
  endereco: new FormControl('', [Validators.required]),
  cep: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]),
  cidade: new FormControl('', [Validators.required]),
  uf: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]),
})

  constructor(private readonly pessoasService: PessoasService) {}

  cadastrarPessoa() {
    const pessoa: Ipessoas = this.formGroupPessoas.value;

    this.pessoasService.adicionarPessoa(pessoa).subscribe()

    }
  }
