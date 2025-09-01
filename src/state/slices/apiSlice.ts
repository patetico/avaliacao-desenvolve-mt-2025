import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { BuscaReq, BuscaResp, EstatisticaResp } from '~/types/api';
import type { DetalhaPessoaReq, DetalhaPessoaResp } from '~/types/api/detalhaPessoa.ts';


const apiSlice = createApi({
  reducerPath: "apiPessoasDesaparecidas",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_SERVER_HOST.replace(/\/+$/, ''),
  }),
  endpoints: (builder) => ({
    detalhesPessoa: builder.query<DetalhaPessoaResp, DetalhaPessoaReq>({
      query: ({ id }) => `/v1/pessoas/${id}`,
    }),
    estatisticas: builder.query<EstatisticaResp, void>({
      query: () => ({ url: '/v1/pessoas/aberto/estatistico' }),
    }),
    pessoasDesaparecidas: builder.query<BuscaResp, BuscaReq | undefined>({
      query: (params) => ({ url: '/v1/pessoas/aberto/filtro', params }),
    }),
  }),
});

export default apiSlice;
export const {
  useDetalhesPessoaQuery,
  useEstatisticasQuery,
  usePessoasDesaparecidasQuery,
} = apiSlice;
