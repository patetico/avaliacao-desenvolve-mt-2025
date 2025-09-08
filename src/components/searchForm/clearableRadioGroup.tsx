import type { ControllerProps } from 'react-hook-form';

import { ClearField } from '~/components/searchForm/clearField';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '~ui/form';
import { RadioGroup, RadioGroupItem } from '~ui/radio-group';


interface ClearableRadioGroupProps extends Omit<ControllerProps, 'render'> {
  label: string;
  items: [label: string, value: string][];
}

const ClearableRadioGroup = ({ control, label, items, ...otherProps }: ClearableRadioGroupProps) => (
  <FormField
    control={control}
    render={({ field }) => (
      <FormItem className="space-y-3">
        <FormLabel>
          {label}
          <ClearField field={field} />
        </FormLabel>
        <FormControl>
          <RadioGroup
            value={field.value || null}
            onValueChange={field.onChange}
            className="flex flex-col space-y-1"
          >
            {items.map(([label, value], index) => (
              <FormItem className="flex items-center" key={index}>
                <FormControl>
                  <RadioGroupItem value={value} />
                </FormControl>
                <FormLabel>
                  {label}
                </FormLabel>
              </FormItem>
            ))}
          </RadioGroup>
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
    {...otherProps}
  />
);

export { ClearableRadioGroup };
