import { useTranslation } from "react-i18next";
import { Logo } from "@/components/Logo";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  showCTA?: boolean;
}

export const Header = ({ showCTA = false }: HeaderProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/">
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-smooth">
            {t('header.home')}
          </Link>
          <Link to="/tech" className="text-muted-foreground hover:text-foreground transition-smooth">
            Tech
          </Link>
          <Link to="/investments" className="text-muted-foreground hover:text-foreground transition-smooth">
            Investments
          </Link>
          <Link to="/about" className="text-muted-foreground hover:text-foreground transition-smooth">
            {t('header.aboutUs')}
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          {showCTA && (
            <Button onClick={() => navigate('/form')} size="sm">
              {t('header.getStarted')}
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};
