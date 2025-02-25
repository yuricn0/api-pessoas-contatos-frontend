import { Ipessoas } from 'src/app/interfaces/ipessoas';
import { PessoasService } from './../../services/pessoas.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-person-table',
  templateUrl: './person-table.component.html',
  styleUrls: ['./person-table.component.scss']
})
export class PersonTableComponent {

  pessoas: Ipessoas[] = [];

  constructor(private pessoasService: PessoasService) { }

  ngOnInit(): void {
    this.pessoasService.buscarTodasPessoas().subscribe((data: Ipessoas[]) => {
      this.pessoas = data;
    });
  }
}
