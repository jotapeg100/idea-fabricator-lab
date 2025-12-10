import { Button } from "@/components/ui/button";
import { ArrowRight, Code, TrendingUp, CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Logo } from "@/components/Logo";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-patagonia.jpg";

const Index = () => {
  const { t } = useTranslation();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      {/* Header / Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-4">
            <Link to="/about" className="text-muted-foreground hover:text-foreground transition-smooth">
              {t('header.aboutUs')}
            </Link>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 z-0 grid-overlay"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="mb-6 animate-fade-in max-w-4xl mx-auto">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-12 max-w-4xl mx-auto font-light animate-fade-in leading-relaxed" style={{ animationDelay: "0.2s" }}>
            {t('hero.subtitle')}
          </p>
          <Button 
            size="lg"
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto animate-fade-in shadow-medium"
            style={{ animationDelay: "0.4s" }}
            onClick={() => scrollToSection("contact")}
          >
            {t('hero.cta')} <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Value Proposition - 3 Columns */}
      <section id="value-proposition" className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">{t('valueProposition.strategy.title')}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('valueProposition.strategy.description')}
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">{t('valueProposition.team.title')}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('valueProposition.team.description')}
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">{t('valueProposition.vision.title')}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('valueProposition.vision.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 md:py-32 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="mb-8 text-center text-foreground">{t('services.title')}</h2>
            <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto leading-relaxed">
              {t('services.intro')}
            </p>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Trapial Tech */}
              <div className="bg-background rounded-2xl p-8 shadow-soft">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Code className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{t('services.tech.name')}</h3>
                    <p className="text-muted-foreground">{t('services.tech.tagline')}</p>
                  </div>
                </div>
                
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {t('services.tech.description')}
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-foreground">{t('services.tech.point1')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-foreground">{t('services.tech.point2')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-foreground">{t('services.tech.point3')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-foreground">{t('services.tech.point4')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-foreground">{t('services.tech.point5')}</span>
                  </li>
                </ul>
                
                <p className="text-sm text-muted-foreground italic mb-4">
                  <span className="font-semibold text-foreground">{t('services.forWhom')}</span> {t('services.tech.audience')}
                </p>
                <Link to="/tech" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                  {t('services.learnMore')} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              
              {/* Trapial Investments */}
              <div className="bg-background rounded-2xl p-8 shadow-soft">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{t('services.investments.name')}</h3>
                    <p className="text-muted-foreground">{t('services.investments.tagline')}</p>
                  </div>
                </div>
                
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {t('services.investments.description')}
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-foreground">{t('services.investments.point1')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-foreground">{t('services.investments.point2')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-foreground">{t('services.investments.point3')}</span>
                  </li>
                </ul>
                
                <p className="text-sm text-muted-foreground italic mb-4">
                  <span className="font-semibold text-foreground">{t('services.forWhom')}</span> {t('services.investments.audience')}
                </p>
                <Link to="/investments" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                  {t('services.learnMore')} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trapial - 4 Boxes */}
      <section id="why-trapial" className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="mb-16 text-center text-foreground">{t('whyTrapial.title')}</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl">
                <h3 className="text-xl font-bold text-foreground mb-4">{t('whyTrapial.trackRecord.title')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('whyTrapial.trackRecord.description')}
                </p>
              </div>
              
              <div className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl">
                <h3 className="text-xl font-bold text-foreground mb-4">{t('whyTrapial.senior.title')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('whyTrapial.senior.description')}
                </p>
              </div>
              
              <div className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl">
                <h3 className="text-xl font-bold text-foreground mb-4">{t('whyTrapial.boutique.title')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('whyTrapial.boutique.description')}
                </p>
              </div>
              
              <div className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl">
                <h3 className="text-xl font-bold text-foreground mb-4">{t('whyTrapial.skinInTheGame.title')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('whyTrapial.skinInTheGame.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section id="contact" className="py-32 md:py-40 gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-8 text-white">{t('footerCta.title')}</h2>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
              {t('footerCta.description')}
            </p>
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-xl px-12 py-8 h-auto shadow-medium"
              onClick={() => scrollToSection("contact")}
            >
              {t('footerCta.cta')} <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
          
          <div className="border-t border-white/20 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
            <Logo variant="footer" className="[&_span]:text-white [&_svg]:text-white" />
            <div className="flex flex-col sm:flex-row gap-6 items-center text-lg opacity-90">
              <a href="mailto:contact@trapial.com" className="hover:underline transition-smooth">
                {t('footerCta.contact')}
              </a>
              <a href="#" className="hover:underline transition-smooth">
                {t('footerCta.linkedin')}
              </a>
              <a href="#" className="hover:underline transition-smooth">
                {t('footerCta.termsPrivacy')}
              </a>
            </div>
            <p className="text-sm opacity-75">
              {t('footerCta.copyright')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
