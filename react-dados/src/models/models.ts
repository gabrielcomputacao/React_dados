export type Email = {
  email_address: string;
};

export type Endereco = {
  area: string;
  area_code?: string | any;
  cep_ou_zipcode?: string;
  bairro: string;
  city: string;
  complemento?: string;
  logradouro?: string;
  endereco: string;
  nome?: string;
  telefone_relacionado?: string;
  numero?: string;
};

export type Telefone = {
  operadora: string;
  phone_number: string;
  whatsapp: string;
};

export type Pessoa = {
  cpf: string;
  data_nascimento: string;
  first_name: string;
  firsts_name?: string;
  full_name: string;
  vinculo?: string;
  procon: string;
  sexo: string;
  surname: string;
  titulo_de_eleitor: string;
  bookmark?: string;
  cidade_nascimento?: string;
  ctps?: string;
  profissao?: string;
  escolaridade?: string;
  estado_nascimento: string;
  idade: string;
  pais_nascimento: string;
  pis_pasep: string;
  status_receita: string;
  nacionalidade: string;
  identidade: string;
};

export type Empresa = {
  cnpj: string;
  vinculo: string;
  renda?: string;
  admissao?: string;
  endereco: Array<Endereco>;
  razao_social: string;
  telefone: Array<Telefone>;
};

export type Snap = {
  email: Array<Email>;
  empresa: Array<Empresa>;
  endereco: Array<Endereco>;
  pessoa: Array<Pessoa>;
  telefone: Array<Telefone>;
};
