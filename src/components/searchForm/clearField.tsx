import { type ComponentProps } from 'react';
import type { ControllerRenderProps } from 'react-hook-form';
import { cn } from '~/lib/shadcn.ts';
import { Button, type UiButtonProps } from '~ui/button.tsx';


interface ClearFieldProps extends ComponentProps<'div'> {
  field: ControllerRenderProps;
  btnProps?: Omit<UiButtonProps, 'onClick'>;
}

const ClearField = ({ field, className, btnProps, ...props }: ClearFieldProps) => {
  if (field.value === undefined) return null;

  return (
    <div className={cn("self-start", className)} {...props}>
      <Button
        variant="ghost"
        className={cn('cursor-pointer')}
        onClick={() => field.onChange(undefined)} {...btnProps}
      >
        Limpar
      </Button>
    </div>
  );
};

export { ClearField };
