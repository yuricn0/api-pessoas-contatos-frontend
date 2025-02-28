import Swal from 'sweetalert2';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IPessoas } from 'src/app/interfaces/ipessoas';
import { PessoasService } from 'src/app/services/pessoas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ViaCepService } from 'src/app/services/via-cep.service';
import { IViaCep } from 'src/app/interfaces/iviacep';
import { UFS } from 'src/app/shared/ufs';

@Component({
  selector: 'app-cadastrar-editar-pessoas',
  templateUrl: './cadastrar-editar-pessoas.component.html',
  styleUrls: ['./cadastrar-editar-pessoas.component.scss'],
})
export class CadastrarEditarPessoasComponent {
  formGroupPessoas: FormGroup = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    endereco: new FormControl('', [Validators.required]),
    cep: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d{5}-\d{3}$/),
    ]),
    cidade: new FormControl('', [Validators.required]),
    uf: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(2),
    ]),
  });

  constructor(
    private readonly pessoasService: PessoasService,
    private readonly Router: Router,
    private readonly route: ActivatedRoute,
    private readonly cepService: ViaCepService
  ) {}

  id: number = 0;
  cepNaoEncontrado: boolean = false;
  ufs = UFS;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.pessoasService
        .buscarPessoaPorId(this.id)
        .subscribe((pessoa: IPessoas) => {
          // Preenche o formulário com os dados da pessoa
          this.formGroupPessoas.patchValue(pessoa);
        });
    }
  }

  cadastrarPessoa() {
    const pessoa: IPessoas = this.formGroupPessoas.value;

    this.pessoasService.cadastrarPessoa(pessoa).subscribe(() => {
      Swal.fire('Sucesso', 'Pessoa cadastrada com sucesso!', 'success');
      Swal.fire({
        title: 'Cadastro realizado!',
        text: 'Deseja cadastrar uma nova pessoa?',
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Cadastrar',
        cancelButtonText: 'Voltar',
      }).then((result) => {
        if (result.isConfirmed) {
          this.formGroupPessoas.reset();
        } else {
          this.Router.navigate(['/pessoas']);
        }
      });
    });
  }

  editarPessoa() {
    const pessoa: IPessoas = this.formGroupPessoas.value;

    if (this.id) {
      this.pessoasService.editarPessoa(this.id, pessoa).subscribe(() => {
        Swal.fire('Sucesso', 'Pessoa editada com sucesso!', 'success');
        this.Router.navigate(['/pessoas']);
      });
    }
  }

  buscarEndereco() {
    const cep = this.formGroupPessoas.get('cep')?.value;

    if (cep) {
      this.cepService.buscarEndereco(cep).subscribe((dados: IViaCep) => {
        if (dados && !dados.erro) {
          this.cepNaoEncontrado = false;
          this.formGroupPessoas.patchValue({
            endereco: dados.logradouro,
            cidade: dados.localidade,
            uf: dados.uf,
          });
        } else {
          this.cepNaoEncontrado = true;
        }
      });
    }
  }

  formatarCep() {
    let cep = this.formGroupPessoas.get('cep')?.value;

    if (!cep.includes('-')) {
      if (cep.length <= 5) {
        this.formGroupPessoas.get('cep')?.setValue(cep);
      } else {
        this.formGroupPessoas
          .get('cep')
          ?.setValue(cep.slice(0, 5) + '-' + cep.slice(5, 8));
      }
    }
  }

  selectUF(uf: string) {
    this.formGroupPessoas.patchValue({ uf });
  }
}
