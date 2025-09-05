import { Slot } from "@radix-ui/react-slot";
import { type VariantProps } from "class-variance-authority";
import type { ComponentProps } from 'react';

import { cn } from "~/lib/shadcn.ts";
import buttonVariants from './buttonVariants.tsx';


export type UiButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
  asChild?: boolean
};

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: UiButtonProps) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button };
