import Swal from 'sweetalert2';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ipessoas } from 'src/app/interfaces/ipessoas';
import { PessoasService } from 'src/app/services/pessoas.service';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private readonly pessoasService: PessoasService,
              private readonly Router: Router,
              private readonly route: ActivatedRoute
  ) {}

  id: number = 0

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.pessoasService.buscarPessoaPorId(this.id).subscribe(
        (pessoa: Ipessoas) => {
          // Preenche o formulário com os dados da pessoa
          this.formGroupPessoas.patchValue(pessoa);
        }
      );
    }
  }

  cadastrarPessoa() {
    const pessoa: Ipessoas = this.formGroupPessoas.value;

    this.pessoasService.cadastrarPessoa(pessoa).subscribe(() => {
      Swal.fire('Sucesso', 'Pessoa cadastrada com sucesso!', 'success');
      this.Router.navigate(['/pessoas']);
    });
  }

  editarPessoa() {
    const pessoa: Ipessoas = this.formGroupPessoas.value;

    if (this.id) {
      this.pessoasService.editarPessoa(this.id, pessoa).subscribe(() => {
        Swal.fire('Sucesso', 'Pessoa editada com sucesso!', 'success');
        this.Router.navigate(['/pessoas']);
      });
    }
  }
}
