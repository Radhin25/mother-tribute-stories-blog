
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-mother-dark text-white hover:bg-mother-dark/90 shadow-sm",
        secondary: "bg-mother-light text-mother-dark hover:bg-mother-light/90 shadow-sm",
        outline: "border-2 border-mother-light bg-transparent hover:bg-mother-light/10 text-mother-dark",
        ghost: "hover:bg-mother-light/20 text-mother-dark hover:text-mother-dark/90",
        link: "text-mother-dark underline-offset-4 hover:underline",
        destructive: "bg-red-500 text-white hover:bg-red-500/90 shadow-sm",
        action: "bg-gradient-to-r from-mother-dark to-mother-DEFAULT text-white hover:shadow-md transition-all duration-300 hover:scale-[1.02]",
      },
      size: {
        default: "h-10 px-5 py-2.5",
        sm: "h-9 px-4 py-2 text-xs",
        lg: "h-12 px-8 py-3.5 text-base",
        icon: "h-10 w-10 p-2.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
