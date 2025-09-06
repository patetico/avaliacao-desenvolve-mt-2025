import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { clamp } from 'es-toolkit';
import type { BuscaReq } from '~/types/api';


const initialState: BuscaReq = {
  porPagina: 12,
  pagina: 0,
};


const desaparecidosQuerySlice = createSlice({
  name: 'desaparecidosQuery',
  initialState,
  reducers: {
    update: (state, { payload }: PayloadAction<BuscaReq>): BuscaReq => ({
      pagina: 0,
      porPagina: state.porPagina,
      ...payload,
    }),
    setPagina: (state, { payload }: PayloadAction<number>) => {
      state.pagina = Math.max(0, payload);
    },
    setPorPagina: (state, { payload }: PayloadAction<number>) => {
      const { porPagina, pagina } = state;
      state.porPagina = clamp(payload, 0, 200);
      state.pagina = Math.floor((porPagina || 0) * (pagina || 0) / payload);
    },
  },
});

export const desaparecidosQueryActions = desaparecidosQuerySlice.actions;
export default desaparecidosQuerySlice;
