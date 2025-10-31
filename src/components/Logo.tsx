interface LogoProps {
  variant?: "default" | "footer";
  className?: string;
}

const PumaIcon = ({ size = 32 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-primary"
  >
    <path
      d="M8 12C8 12 6 10 6 8C6 6 7 5 8 5C9 5 10 6 10 7M10 7C10 7 11 5 13 5C15 5 16 7 16 8M28 15C28 15 26 12 24 11C22 10 20 11 19 12C18 13 18 14 18 15M18 15C18 15 17 16 15 16C13 16 12 15 12 14M12 14L10 7M28 15C28 16 27 18 26 19C25 20 23 21 21 21C19 21 17 20 16 19C15 18 14 17 13 16M13 16C12 17 10 18 8 18C6 18 4 16 3 14M12 14C12 15 11 16 10 17C9 18 8 18 7 18M18 15C19 16 20 18 21 20C22 22 23 24 23 26C23 28 22 29 21 29C20 29 19 28 18 27"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Logo = ({ variant = "default", className = "" }: LogoProps) => {
  const isFooter = variant === "footer";
  const iconSize = isFooter ? 24 : 32;
  
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <PumaIcon size={iconSize} />
      <span className={`${isFooter ? 'text-lg' : 'text-xl'} font-bold tracking-tight text-foreground`}>
        Trapial Ventures
      </span>
    </div>
  );
};
