import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { IPessoas } from 'src/app/interfaces/ipessoas';
import { PessoasService } from 'src/app/services/pessoas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  totalPessoas: number = 0;
  ultimaPessoa: IPessoas | null = null;
  filtroNome: string = '';
  exibirDiv: boolean = true;

  constructor(
    private readonly router: Router,
    private readonly pessoasService: PessoasService
  ) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.exibirDiv = event.url === '/';
        this.carregarDados();
      }
    });
    this.carregarDados();
  }

  carregarDados(): void {
    this.pessoasService.buscarTodasPessoas().subscribe((data: IPessoas[]) => {
      this.totalPessoas = data.length;
      this.ultimaPessoa = data.length > 0 ? data[data.length - 1] : null;
    });
  }
}
