import { ClearableRadioGroup } from '~/components/searchForm/clearableRadioGroup.tsx';
import type { ControllerWithoutRenderProps } from '~/components/searchForm/schema.tsx';


export const GeneroInput = (props: ControllerWithoutRenderProps) => (
  <ClearableRadioGroup
    label="Sexo"
    items={[
      ['Feminino', 'FEMININO'],
      ['Masculino', 'MASCULINO'],
    ]}
    name="genero"
    {...props}
  />
);
