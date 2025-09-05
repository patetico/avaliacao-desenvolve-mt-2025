import { ClearField } from '~/components/searchForm/clearField';
import type { ControllerWithoutRenderProps } from '~/components/searchForm/schema';
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
            className="pt-4"
            min={0}
            max={100}
            step={1}
            value={field.value}
            onValueChange={field.onChange}
            labelRender={(v) => (<div className="whitespace-pre text-sm">{v}{v > 99 && '+'} ano{v == 1 || 's'}</div>)}
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
