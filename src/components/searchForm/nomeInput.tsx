import type { ControllerWithoutRenderProps } from '~/components/searchForm/schema.tsx';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '~ui/form.tsx';
import { Input } from '~ui/input.tsx';


const sanitizeInput = (text: string) => text.replaceAll(/\s+/g, ' ');

const NomeInput = ({ control, ...otherProps }: ControllerWithoutRenderProps) => (
  <FormField
    control={control}
    name="nome"
    render={({ field: { value, onChange, ...inputProps } }) => (
      <FormItem>
        <FormLabel>Nome da pessoa:</FormLabel>
        <FormControl>
          <Input
            placeholder="João"
            type="text"
            value={value}
            onChange={(e) => onChange(sanitizeInput(e.target.value))}
            {...inputProps}
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
    {...otherProps}
  />
);

export { NomeInput };
