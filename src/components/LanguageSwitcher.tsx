import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  // Show the current language code
  const currentLang = i18n.language === 'es' ? 'ES' : 'EN';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="px-3 py-2 font-medium text-sm">
          {currentLang}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-background z-50 min-w-[80px]">
        <DropdownMenuItem 
          onClick={() => changeLanguage('en')}
          className="cursor-pointer justify-center font-medium"
        >
          EN
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => changeLanguage('es')}
          className="cursor-pointer justify-center font-medium"
        >
          ES
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
