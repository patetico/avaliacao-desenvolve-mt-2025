import { Eraser } from 'lucide-react';
import { type ComponentProps } from 'react';
import type { ControllerRenderProps } from 'react-hook-form';
import { cn } from '~/lib/shadcn';
import { Button } from '~ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '~ui/tooltip';


interface ClearFieldProps extends ComponentProps<'button'> {
  field: ControllerRenderProps;
}

const ClearField = ({ field, className, ...props }: ClearFieldProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          size="iconSm"
          variant="ghostDestructive"
          className={cn('cursor-pointer', field.value ?? 'invisible', className)}
          onClick={() => field.onChange(undefined)}
          {...props}
        >
          <span className="sr-only">Limpar</span>
          <Eraser />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        Limpar
      </TooltipContent>
    </Tooltip>

  );
};

export { ClearField };
