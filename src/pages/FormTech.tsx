import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Logo } from "@/components/Logo";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const FormTech = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate("/tech")}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              {t('form.back')}
            </Button>
            <Logo />
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="mb-4">{t('formTech.title')}</h1>
            <p className="text-xl text-muted-foreground mb-6">
              {t('formTech.subtitle')}
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                {t('formTech.badge1')}
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                {t('formTech.badge2')}
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                {t('formTech.badge3')}
              </span>
            </div>
          </div>

          {/* Google Form Embed */}
          <div className="w-full flex justify-center">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSeeA3HOejJ8NZ9rYanHSLHSPsK7yivcByn8vm3of2wC8Nn6_w/viewform?embedded=true" 
              width="640" 
              height="1054" 
              frameBorder="0" 
              marginHeight={0}
              marginWidth={0}
              className="w-full max-w-[640px] border-0"
              title="Tech Contact Form"
            >
              {t('form.loading')}
            </iframe>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FormTech;
