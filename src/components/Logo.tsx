import { Mountain } from "lucide-react";

interface LogoProps {
  variant?: "default" | "footer";
  className?: string;
}

export const Logo = ({ variant = "default", className = "" }: LogoProps) => {
  const isFooter = variant === "footer";
  
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Mountain className={`${isFooter ? 'h-6 w-6' : 'h-8 w-8'} text-primary`} />
      <span className={`${isFooter ? 'text-lg' : 'text-xl'} font-bold tracking-tight text-foreground`}>
        Pampa Ventures
      </span>
    </div>
  );
};
