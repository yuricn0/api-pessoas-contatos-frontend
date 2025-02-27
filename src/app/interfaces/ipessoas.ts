import { Icontatos } from './icontatos';

export interface IPessoas {
  id: number;
  nome: string;
  endereco: string;
  cep: string;
  cidade: string;
  uf: string;
  contatos: Array<Icontatos>;
}
