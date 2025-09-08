import * as SliderPrimitive from '@radix-ui/react-slider';
import { type ComponentProps, type ReactNode, useMemo } from 'react';

import { cn } from '~/lib/shadcn.ts';


interface SliderProps extends ComponentProps<typeof SliderPrimitive.Root> {
  labelPosition?: 'top' | 'bottom';
  labelRender?: (value: number) => ReactNode;
}

function Slider(
  {
    className,
    defaultValue,
    value,
    min = 0,
    max = 100,
    labelRender,
    labelPosition = 'top',
    ...props
  }: SliderProps,
) {
  const _values = useMemo(
    () => value ?? defaultValue ?? [min, max],
    [value, defaultValue, min, max],
  );

  const labelTop = labelPosition === 'top';

  return (
    <>
      <SliderPrimitive.Root
        data-slot="slider"
        defaultValue={defaultValue}
        value={value ?? _values}
        min={min}
        max={max}
        className={cn(
          "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
          className,
        )}
        {...props}
      >
        <SliderPrimitive.Track
          data-slot="slider-track"
          className={cn(
            "bg-muted my-1 relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5",
          )}
        >
          <SliderPrimitive.Range
            data-slot="slider-range"
            className={cn(
              "bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full",
            )}
          />
        </SliderPrimitive.Track>
        {Array.from({ length: _values.length }, (_, index) => (
          <SliderPrimitive.Thumb
            data-slot="slider-thumb"
            key={index}
            className="border-primary bg-background ring-ring/50 block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
          >
            {labelRender && (
              <div
                className={cn(
                  'absolute flex w-full justify-center p-1',
                  {
                    "bottom-full": labelTop === !(index % 2),
                    "top-full": labelTop !== !(index % 2),
                  },
                )}
              >
                {labelRender(_values[index])}
              </div>
            )}
          </SliderPrimitive.Thumb>
        ))}
      </SliderPrimitive.Root>
    </>
  );
}

export { Slider };
