import { ClearField } from '~/components/searchForm/clearField';
import type { ControllerWithoutRenderProps } from '~/components/searchForm/schema';
import { plural } from '~/lib/formatters';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '~ui/form';
import { Slider } from '~ui/slider';


const IdadeInput = ({ control, ...otherProps }: ControllerWithoutRenderProps) => (
  <FormField
    control={control}
    name="idade"
    render={({ field }) => (
      <FormItem>
        <FormLabel >Idade:</FormLabel>
        <FormControl>
          <Slider
            className="py-6 px-4"
            min={0}
            max={100}
            step={1}
            value={field.value}
            onValueChange={field.onChange}
            labelRender={(v) => (<span className="whitespace-pre text-sm">{v}{v > 99 && '+'} {plural(v, 'ano')}</span>)}
          />
        </FormControl>
        <ClearField field={field} />
        <FormMessage />
      </FormItem>
    )}
    {...otherProps}
  />
);

export { IdadeInput };
