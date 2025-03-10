# Cadastro e Gerenciamento de Pessoas

## Índice
1. [Introdução](#introdução)
2. [Tecnologias Utilizadas](#tecnologias-utilizadas)
3. [Telas](#telas)
4. [Estrutura da Aplicação](#estrutura-da-aplicação)
5. [Executando o Projeto](#executando-o-projeto)
   - [Front-end](#front-end)
   - [Back-end](#back-end)
6. [Funcionalidades Futuras](#funcionalidades-futuras)

## Introdução
Aplicação front-end projetada para gerenciamento de pessoas, oferecendo recursos para cadastro, atualização, exclusão e consulta de dados. Seguindo as melhores práticas de desenvolvimento com o framework Angular, a aplicação garante uma organização eficiente e estruturada das informações.

## Tecnologias Utilizadas
- Angular CLI: 16.2.16
- Node: 18.20.6
- Package Manager: npm 10.2.4
- HTML / SCSS / Typescript
- Visual Studio Code (Ambiente de Desenvolvimento)
- SweetAlert2 (Alertas Personalizados)
- Font Awesome (Biblioteca de ícones)

## Telas
Telas da aplicação:

- `http://localhost:4200/`: Tela Home.

![Tela_home](https://github.com/user-attachments/assets/8b992e93-5afd-4894-9045-a5d389b093cb)


- `http://localhost:4200/cadastrar-pessoa`: Tela de Cadastro de Pessoas.

![Tela_cadastro](https://github.com/user-attachments/assets/d6ba2e58-3729-4d8e-bb81-22e258f4123b)


- `http://localhost:4200/editar-pessoa/{id}`: Tela de Edição de Pessoas.

![Tela_Edicao](https://github.com/user-attachments/assets/4ff0ca38-686e-49a3-8f85-9a2b5e091b4d)


- `http://localhost:4200/pessoas`: Tela de Listagem de Pessoas.

![Tela_Listagem](https://github.com/user-attachments/assets/85ac220e-f0a5-4736-a147-ab481fa30823)


## Estrutura da Aplicação

A estrutura da aplicação foi organizada de forma modular para garantir clareza, escalabilidade e manutenção eficiente, utilizando o framework Angular. A seguir, uma descrição dos arquivos da aplicação:

- **src/app**: Contém todo o código-fonte principal da aplicação, incluindo componentes, páginas, serviços e configurações gerais.

- **src/app/components**: Armazena componentes da aplicação.

- **src/app/interfaces**: Contém interfaces TypeScript utilizadas para definir a estrutura dos dados e garantir a tipagem segura na aplicação.
   
- **src/app/pages**: Guarda os módulos e componentes que representam as páginas da aplicação, organizando a navegação.
   
- **src/app/services**: Contém os serviços responsáveis pela comunicação com as APIs.

- **src/app/shared**: Contém a lista das UFs que são utilizadas no botão dropdown.

- **src/enviroments**: Contém as urls que são utilizadas nas APIs.

## Executando o projeto

### Front-end 
1. Clone o repositório:
   
   ```bash
   git clone https://github.com/yuricn0/api-pessoas-contatos-frontend.git 

3. Abra no Vscode ou na IDE de sua prefêrencia:
   
 - [VsCode](https://code.visualstudio.com/)

3. Instale as dependências.

   ```bash
   npm install

4. Execute a aplicação.

   ```bash
   ng serve
   
Isso iniciará a aplicação Angular. Se tudo estiver configurado corretamente, você poderá acessar a aplicação no endereço http://localhost:4200/

### Back-end

1. O repositório da API utilizada nesse projeto front-end, encontra-se nesse endereço: https://github.com/yuricn0/api-pessoas-contatos

2. Clone o repositório:
   
   ```bash
   git clone https://github.com/yuricn0/api-pessoas-contatos.git

4. Abra no Eclipse ou na IDE de sua preferência:
   
- [Eclipse](https://eclipseide.org/)

5. Compile a aplicação

   ```bash
   mvn clean install
   
6. Execute a aplicação

   ```bash
   mvn spring-boot:run

## Funcionalidades Futuras 

- Adicionar paginação para controlar o tamanho da tabela.
- Adicionar no formulário o campo "Contato" adicionando a API de contatos.
