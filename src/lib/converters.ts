import type { SearchFormParams } from '~/components/searchForm/schema.tsx';
import type { BuscaReq } from '~/types/api';


const toDate = (maybe?: string) => {
  const date = new Date(maybe || 'error');
  return Number.isNaN(date.getTime()) ? undefined : date;
};

const searchFormToApiQuery = (form: SearchFormParams): BuscaReq => {
  const [idadeIni, idadeFim] = form.idade ?? [0, 100];
  return ({
    nome: form.nome,
    faixaIdadeInicial: idadeIni < 1 ? undefined : idadeIni,
    faixaIdadeFinal: idadeFim > 99 ? undefined : idadeFim,
    sexo: form.genero,
    status: form.status,
  });
};

export {
  toDate,
  searchFormToApiQuery,
};
