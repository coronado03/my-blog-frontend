import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-pixel ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-terminal-black text-terminal-white border-2 border-terminal-white hover:bg-terminal-white hover:text-terminal-black transition-all",
        destructive:
          "bg-terminal-black text-terminal-white border-2 border-terminal-white hover:bg-terminal-white hover:text-terminal-black",
        outline:
          "border-2 border-terminal-white bg-terminal-black text-terminal-white hover:bg-terminal-white hover:text-terminal-black",
        secondary:
          "bg-terminal-dark text-terminal-white border-2 border-terminal-white hover:bg-terminal-white hover:text-terminal-black",
        ghost: "border-2 border-transparent hover:border-terminal-white hover:bg-terminal-dark",
        link: "text-terminal-white underline-offset-4 hover:underline",
        /* Terminal Variants */
        terminal: "terminal-button",
        inverse: "bg-terminal-white text-terminal-black border-2 border-terminal-white hover:bg-terminal-black hover:text-terminal-white",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-9 px-4 text-sm",
        lg: "h-12 px-8 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
