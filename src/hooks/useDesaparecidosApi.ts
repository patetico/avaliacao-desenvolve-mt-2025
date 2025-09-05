import { usePessoasDesaparecidasQuery } from '~/state/slices/apiSlice.ts';
import { useAppSelector } from '~/state/store.ts';


function useDesaparecidosApi() {
  const query = useAppSelector(state => state.desaparecidosQuery);
  return usePessoasDesaparecidasQuery({ ...query });
}
export default useDesaparecidosApi
