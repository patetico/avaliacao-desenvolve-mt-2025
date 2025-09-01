export interface SortObject {
  unsorted?: boolean;
  sorted?: boolean;
  empty?: boolean;
}

export interface Pageable {
  unpaged?: boolean;
  pageNumber?: number;
  paged?: boolean;
  pageSize?: number;
  offset?: number;
  sort?: SortObject;
}

interface OcorrenciaEntrevDesapDTO {
  informacao?: string;
  vestimentasDesaparecido?: string;
}

type TipoCartaz =
  | "PDF_DESAPARECIDO"
  | "PDF_LOCALIZADO"
  | "JPG_DESAPARECIDO"
  | "JPG_LOCALIZADO"
  | "INSTA_DESAPARECIDO"
  | "INSTA_LOCALIZADO";

interface OcorrenciaCartazDTO {
  urlCartaz?: string;
  tipoCartaz?: TipoCartaz;
}

interface OcorrenciaDTO {
  dtDesaparecimento?: string;
  dataLocalizacao?: string;
  encontradoVivo?: boolean;
  localDesaparecimentoConcat?: string;
  ocorrenciaEntrevDesapDTO?: OcorrenciaEntrevDesapDTO;
  listaCartaz?: OcorrenciaCartazDTO[];
  ocoId?: number;
}

export type Sexo = "MASCULINO" | "FEMININO";

export interface PessoaDTO {
  id?: number;
  nome?: string;
  idade?: number;
  sexo?: Sexo;
  vivo?: boolean;
  urlFoto?: string;
  ultimaOcorrencia?: OcorrenciaDTO;
}

export type Status = 'DESAPARECIDO' | 'LOCALIZADO';
