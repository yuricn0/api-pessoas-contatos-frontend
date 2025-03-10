import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ListagemPessoasComponent } from './pages/pessoas/listagem-pessoas/listagem-pessoas.component';
import { CadastrarEditarPessoasComponent } from './pages/pessoas/cadastrar-editar-pessoas/cadastrar-editar-pessoas.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PessoasService } from './services/pessoas.service';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListagemPessoasComponent,
    CadastrarEditarPessoasComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [PessoasService],
  bootstrap: [AppComponent],
})
export class AppModule {}
