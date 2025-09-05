import { desaparecidosQueryActions } from '~/state/slices/desaparecidosQuerySlice.ts';
import { useAppDispatch, useAppSelector } from '~/state/store.ts';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~ui/select";

import { DEFAULT_PAGE_SIZE, OPTIONS } from './desaparecidosPageSizeValues.ts';


function DesaparecidosPageSize() {
  const pageSize = useAppSelector((state) => state.desaparecidosQuery.porPagina);
  const appDispatch = useAppDispatch();

  const updateValue = (val: string) => {
    appDispatch(desaparecidosQueryActions.setPorPagina(parseInt(val, 10)));
  };

  return (
    <Select
      defaultValue={DEFAULT_PAGE_SIZE.toString()}
      value={pageSize?.toString()}
      onValueChange={updateValue}
    >
      <SelectTrigger className="w-40">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {OPTIONS.map((opt) => <SelectItem key={opt} value={opt.toString()}>{opt} por página</SelectItem>)}
      </SelectContent>
    </Select>
  );
}

export default DesaparecidosPageSize;
