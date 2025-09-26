import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { forwardRef } from "react";

interface CircularButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "primary" | "secondary" | "outline";
}

const CircularButton = forwardRef<HTMLButtonElement, CircularButtonProps>(
  ({ className, size = "lg", variant = "primary", children, ...props }, ref) => {
    const sizeClasses = {
      sm: "w-16 h-16 text-sm",
      md: "w-20 h-20 text-base",
      lg: "w-32 h-32 text-lg",
      xl: "w-40 h-40 text-xl"
    };

    const variantClasses = {
      primary: "bg-gradient-to-br from-primary to-primary-dark text-primary-foreground shadow-primary hover:scale-105",
      secondary: "bg-gradient-to-br from-secondary to-accent text-secondary-foreground hover:scale-105",
      outline: "border-2 border-primary text-primary bg-background hover:bg-primary hover:text-primary-foreground hover:scale-105"
    };

    return (
      <Button
        ref={ref}
        className={cn(
          "rounded-full font-semibold transition-all duration-300 shadow-lg",
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

CircularButton.displayName = "CircularButton";

export { CircularButton };