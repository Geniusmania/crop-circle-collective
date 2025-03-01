
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline" | "secondary";
}

export function Badge({ 
  children, 
  className,
  variant = "default"
}: BadgeProps) {
  return (
    <span 
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variant === "default" && "bg-primary text-primary-foreground",
        variant === "secondary" && "bg-secondary text-secondary-foreground",
        variant === "outline" && "border border-border",
        className
      )}
    >
      {children}
    </span>
  );
}
