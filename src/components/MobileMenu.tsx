import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface MobileMenuProps {
  showCTA?: boolean;
}

export const MobileMenu = ({ showCTA = false }: MobileMenuProps) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
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
            <Link
              to="/"
              onClick={handleClose}
              className="flex items-center px-4 py-3 text-left text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              {t('header.home')}
            </Link>
            <Link
              to="/tech"
              onClick={handleClose}
              className="flex items-center px-4 py-3 text-left text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              Tech
            </Link>
            <Link
              to="/investments"
              onClick={handleClose}
              className="flex items-center px-4 py-3 text-left text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              Investments
            </Link>
            <Link
              to="/about"
              onClick={handleClose}
              className="flex items-center px-4 py-3 text-left text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              {t('header.aboutUs')}
            </Link>
          </nav>

          {showCTA && (
            <div className="mt-auto p-4 border-t border-border">
              <Link to="/form" onClick={handleClose} className="block">
                <Button className="w-full">
                  {t('header.getStarted')}
                </Button>
              </Link>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
