import { useTranslation } from "react-i18next";
import { Logo } from "@/components/Logo";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/MobileMenu";

interface HeaderProps {
  showCTA?: boolean;
}

export const Header = ({ showCTA = false }: HeaderProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-between">
        <Link to="/">
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center gap-4 lg:gap-6">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-smooth text-sm lg:text-base">
            {t('header.home')}
          </Link>
          <Link to="/tech" className="text-muted-foreground hover:text-foreground transition-smooth text-sm lg:text-base">
            Tech
          </Link>
          <Link to="/investments" className="text-muted-foreground hover:text-foreground transition-smooth text-sm lg:text-base">
            Investments
          </Link>
          <Link to="/about" className="text-muted-foreground hover:text-foreground transition-smooth text-sm lg:text-base">
            {t('header.aboutUs')}
          </Link>
        </nav>
        <div className="flex items-center gap-2 sm:gap-4">
          <LanguageSwitcher />
          {showCTA && (
            <Button onClick={() => navigate('/form')} size="sm" className="hidden sm:flex">
              {t('header.getStarted')}
            </Button>
          )}
          <MobileMenu showCTA={showCTA} />
        </div>
      </div>
    </header>
  );
};
