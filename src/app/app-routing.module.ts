import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemPessoasComponent } from './pages/pessoas/listagem-pessoas/listagem-pessoas.component';
import { CadastrarEditarPessoasComponent } from './pages/pessoas/cadastrar-editar-pessoas/cadastrar-editar-pessoas.component';

const routes: Routes = [
  {
    path: 'pessoas', component: ListagemPessoasComponent
  },
  {
    path: 'cadastrar-pessoa', component: CadastrarEditarPessoasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
