import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";

interface CropCardProps {
  image: string;
  title: string;
  description: string;
  category: string;
  className?: string;
}

export function CropCard({ image, title, description, category, className }: CropCardProps) {
  return (
    <div 
      className={cn(
        "glass-card rounded-2xl overflow-hidden hover-scale", 
        className
      )}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-105"
        />
      </div>
      <div className="p-6">
        <Badge className="mb-2">{category}</Badge>
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  );
}
