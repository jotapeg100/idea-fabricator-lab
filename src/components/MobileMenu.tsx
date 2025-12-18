import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface MobileMenuProps {
  showCTA?: boolean;
}

export const MobileMenu = ({ showCTA = false }: MobileMenuProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleNavigate = (path: string) => {
    setOpen(false);
    navigate(path);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[280px] sm:w-[320px] p-0">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <span className="font-semibold text-foreground">Menu</span>
          </div>
          
          <nav className="flex flex-col p-4 gap-1">
            <button
              onClick={() => handleNavigate('/')}
              className="flex items-center px-4 py-3 text-left text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              {t('header.home')}
            </button>
            <button
              onClick={() => handleNavigate('/tech')}
              className="flex items-center px-4 py-3 text-left text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              Tech
            </button>
            <button
              onClick={() => handleNavigate('/investments')}
              className="flex items-center px-4 py-3 text-left text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              Investments
            </button>
            <button
              onClick={() => handleNavigate('/about')}
              className="flex items-center px-4 py-3 text-left text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              {t('header.aboutUs')}
            </button>
          </nav>

          {showCTA && (
            <div className="mt-auto p-4 border-t border-border">
              <Button 
                onClick={() => handleNavigate('/form')} 
                className="w-full"
              >
                {t('header.getStarted')}
              </Button>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
