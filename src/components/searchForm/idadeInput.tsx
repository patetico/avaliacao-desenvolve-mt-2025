import { ClearField } from '~/components/searchForm/clearField.tsx';
import type { ControllerWithoutRenderProps } from '~/components/searchForm/schema.tsx';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '~ui/form.tsx';
import { Slider } from '~ui/slider.tsx';


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
            max={150}
            step={1}
            value={field.value}
            onValueChange={field.onChange}
            labelRender={(v) => (<div className="whitespace-pre text-sm">{v} ano{v == 1 || 's'}</div>)}
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
