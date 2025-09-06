import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { toLower } from 'es-toolkit/compat';

import { toDate } from '~/lib/converters';
import { plural } from '~/lib/formatters';
import type { BuscaReq, BuscaResp, EstatisticaResp } from '~/types/api';
import type { PessoaDTO, Sexo } from '~/types/api/_base';
import type { DetalhaPessoaReq, DetalhaPessoaResp } from '~/types/api/detalhaPessoa.ts';


export interface TransformedPessoaDTO {
  id?: number;
  nome: string;
  idade?: number;
  idadeTxt: string;
  sexo: Lowercase<Sexo> | 'desconhecido';
  urlFoto?: string;
  perdidoEm?: Date;
  encontradoEm?: Date;
  local?: string;
  informacao?: string;
  roupas?: string;
}

const transformPessoaDTO = (dto: PessoaDTO): TransformedPessoaDTO => {
  const ocorrencia = dto.ultimaOcorrencia;

  const idadeTxt = dto.idade === undefined ? '?? anos' : `${dto.idade} ${plural(dto.idade, 'ano')}`;

  return {
    id: dto.id,
    nome: dto.nome || '',
    idade: dto.idade,
    idadeTxt,
    sexo: toLower(dto.sexo) || 'desconhecido',
    urlFoto: dto.urlFoto,
    perdidoEm: toDate(ocorrencia?.dtDesaparecimento),
    encontradoEm: toDate(ocorrencia?.dataLocalizacao),
    local: ocorrencia?.localDesaparecimentoConcat,
    informacao: ocorrencia?.ocorrenciaEntrevDesapDTO?.informacao,
    roupas: ocorrencia?.ocorrenciaEntrevDesapDTO?.vestimentasDesaparecido,
  };
};

export interface TransformedBuscaResp {
  countItems: number;
  countPages: number;
  countPerPage: number;
  pageNumber: number;
  content: TransformedPessoaDTO[];
}

const transformBuscaResp = (resp: BuscaResp): TransformedBuscaResp => {
  return {
    countItems: resp.totalElements || 0,
    countPages: resp.totalPages || 0,
    countPerPage: resp.size || 0,
    pageNumber: resp.number || 0,
    content: (resp.content || []).map(p => transformPessoaDTO(p)),
  };
};

const apiSlice = createApi({
  reducerPath: "apiPessoasDesaparecidas",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_SERVER_HOST.replace(/\/+$/, ''),
  }),
  endpoints: (builder) => ({
    detalhesPessoa: builder.query<TransformedPessoaDTO, DetalhaPessoaReq, DetalhaPessoaResp>({
      query: ({ id }) => `/v1/pessoas/${id}`,
      transformResponse: (resp) => transformPessoaDTO(resp),
    }),
    estatisticas: builder.query<EstatisticaResp, void>({
      query: () => ({ url: '/v1/pessoas/aberto/estatistico' }),
    }),
    pessoasDesaparecidas: builder.query<TransformedBuscaResp, BuscaReq | void, BuscaResp>({
      query: (params) => ({ url: '/v1/pessoas/aberto/filtro', params: params || undefined }),
      transformResponse: (resp) => transformBuscaResp(resp),
    }),
  }),
});

export default apiSlice;
export const {
  useDetalhesPessoaQuery,
  useEstatisticasQuery,
  usePessoasDesaparecidasQuery,
} = apiSlice;
