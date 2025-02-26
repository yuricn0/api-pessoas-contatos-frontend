import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Ipessoas } from 'src/app/interfaces/ipessoas';
import { PessoasService } from 'src/app/services/pessoas.service';

@Component({
  selector: 'app-listagem-pessoas',
  templateUrl: './listagem-pessoas.component.html',
  styleUrls: ['./listagem-pessoas.component.scss']
})
export class ListagemPessoasComponent {

  pessoas: Ipessoas[] = [];

  constructor(private readonly pessoasService: PessoasService) { }

  ngOnInit(): void {
    this.pessoasService.buscarTodasPessoas().subscribe((data: Ipessoas[]) => {
      this.pessoas = data;
    });
  }

  deletarPessoa(id: number): void {
    Swal.fire({
      title: 'Tem certeza?',
      text: "Você não poderá reverter isso!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, excluir!',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.pessoasService.deletarPessoa(id).subscribe(
          () => this.pessoas = this.pessoas.filter(pessoa => pessoa.id !== id)
        );
        Swal.fire(
          'Feito!',
          'A pessoa foi deletada com sucesso.',
          'success'
        )
     }
   });
 }
}
