import { ClearableRadioGroup } from '~/components/searchForm/clearableRadioGroup.tsx';
import type { ControllerWithoutRenderProps } from '~/components/searchForm/schema.tsx';


export const StatusInput = (props: ControllerWithoutRenderProps) => (
  <ClearableRadioGroup
    items={[
      ['Desaparecido', 'DESAPARECIDO'],
      ['Localizado', 'LOCALIZADO'],
    ]}
    name="status"
    {...props}
  />
);
