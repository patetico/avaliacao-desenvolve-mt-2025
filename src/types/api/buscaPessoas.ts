import type { Pageable, PessoaDTO, Sexo, SortObject, Status } from './_base.ts';


/** Request params de `GET /v1/pessoas/aberto/filtro` */
export interface BuscaReq {
  nome?: string;
  faixaIdadeInicial?: number;
  faixaIdadeFinal?: number;
  sexo?: Sexo;
  pagina?: number;
  porPagina?: number;
  status?: Status;
}

/** Response de `GET /v1/pessoas/aberto/filtro` */
export interface BuscaResp {
  totalElements?: number;
  totalPages?: number;
  pageable?: Pageable;
  numberOfElements?: number;
  first?: boolean;
  last?: boolean;
  size?: number;
  content?: PessoaDTO[];
  number?: number;
  sort?: SortObject;
  empty?: boolean;
}
