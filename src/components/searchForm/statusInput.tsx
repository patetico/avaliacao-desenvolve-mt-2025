import { ClearableRadioGroup } from '~/components/searchForm/clearableRadioGroup.tsx';
import type { ControllerWithoutRenderProps } from '~/components/searchForm/schema.tsx';


export const StatusInput = (props: ControllerWithoutRenderProps) => (
  <ClearableRadioGroup
    label="Status"
    items={[
      ['Desaparecido', 'DESAPARECIDO'],
      ['Localizado', 'LOCALIZADO'],
    ]}
    name="status"
    {...props}
  />
);
