import { ClearableRadioGroup } from '~/components/searchForm/clearableRadioGroup.tsx';
import type { ControllerWithoutRenderProps } from '~/components/searchForm/schema.tsx';


export const GeneroInput = (props: ControllerWithoutRenderProps) => (
  <ClearableRadioGroup
    items={[
      ['Feminino', 'FEMININO'],
      ['Masculino', 'MASCULINO'],
    ]}
    name="genero"
    {...props}
  />
);
