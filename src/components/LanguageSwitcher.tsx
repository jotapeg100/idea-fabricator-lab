import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import flagUK from "@/assets/flag-uk.png";
import flagSpain from "@/assets/flag-spain.png";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  // Show the opposite language (the one to switch to)
  const displayFlag = i18n.language === 'es' ? flagUK : flagSpain;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="p-2">
          <img 
            src={displayFlag} 
            alt="Language flag" 
            className="w-6 h-6 rounded object-cover"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-background z-50">
        <DropdownMenuItem 
          onClick={() => changeLanguage('en')}
          className="cursor-pointer gap-2"
        >
          <img 
            src={flagUK} 
            alt="UK flag" 
            className="w-5 h-5 rounded object-cover"
          />
          <span>English</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => changeLanguage('es')}
          className="cursor-pointer gap-2"
        >
          <img 
            src={flagSpain} 
            alt="Spain flag" 
            className="w-5 h-5 rounded object-cover"
          />
          <span>Español</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
