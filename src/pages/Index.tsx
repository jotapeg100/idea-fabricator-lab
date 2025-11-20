import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Logo } from "@/components/Logo";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import heroImage from "@/assets/hero-patagonia.jpg";
import mendozaImage from "@/assets/mendoza-vineyards.jpg";
import iguazuImage from "@/assets/iguazu-falls.jpg";
import pampasImage from "@/assets/pampas-sunset.jpg";

const Index = () => {
  const navigate = useNavigate();
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
          <LanguageSwitcher />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 z-0 grid-overlay"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="mb-6 animate-fade-in">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-12 max-w-3xl mx-auto font-light animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {t('hero.subtitle')}
          </p>
          <Button 
            size="lg"
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto animate-fade-in shadow-medium"
            style={{ animationDelay: "0.4s" }}
            onClick={() => scrollToSection("how-we-work")}
          >
            {t('header.getStarted')} <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Why Argentina */}
      <section id="why-argentina" className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-8 text-foreground">{t('whyArgentina.title')}</h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              {t('whyArgentina.intro')}
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg">{t('whyArgentina.point1')}</p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg">{t('whyArgentina.point2')}</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg">{t('whyArgentina.point3')}</p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg">{t('whyArgentina.point4')}</p>
                </div>
              </div>
            </div>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t('whyArgentina.conclusion')}
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section id="what-we-do" className="py-24 md:py-32 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-16 text-center text-foreground">{t('whatWeDo.title')}</h2>
            
            <div className="grid md:grid-cols-3 gap-12 mb-16">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
                <h3 className="text-2xl font-bold">{t('whatWeDo.discovery.title')}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('whatWeDo.discovery.description')}
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
                <h3 className="text-2xl font-bold">{t('whatWeDo.analysis.title')}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('whatWeDo.analysis.description')}
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
                <h3 className="text-2xl font-bold">{t('whatWeDo.representation.title')}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('whatWeDo.representation.description')}
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <Button 
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 h-auto shadow-soft"
                onClick={() => scrollToSection("contact")}
              >
                {t('whatWeDo.cta')} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section - Vineyards */}
      <section className="h-[60vh] relative">
        <div 
          className="absolute inset-0 grid-overlay"
          style={{
            backgroundImage: `url(${mendozaImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
      </section>

      {/* How We Work */}
      <section id="how-we-work" className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8 text-foreground">{t('howWeWork.title')}</h2>
            <p className="text-2xl text-muted-foreground mb-12 leading-relaxed">
              {t('howWeWork.question')}
            </p>
            <p className="text-xl text-foreground mb-12 leading-relaxed">
              {t('howWeWork.answer')}
            </p>
            
            <div className="space-y-6 mb-16">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-7 w-7 text-primary flex-shrink-0 mt-1" />
                <p className="text-xl">{t('howWeWork.point1')}</p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-7 w-7 text-primary flex-shrink-0 mt-1" />
                <p className="text-xl">{t('howWeWork.point2')}</p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-7 w-7 text-primary flex-shrink-0 mt-1" />
                <p className="text-xl">{t('howWeWork.point3')}</p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-7 w-7 text-primary flex-shrink-0 mt-1" />
                <p className="text-xl">{t('howWeWork.point4')}</p>
              </div>
            </div>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {t('howWeWork.noCommitment')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 text-lg text-muted-foreground mb-12">
              <div className="flex-1">
                <span className="font-semibold text-foreground">{t('howWeWork.timeRequired')}</span> {t('howWeWork.timeValue')}
              </div>
              <div className="flex-1">
                <span className="font-semibold text-foreground">{t('howWeWork.initialResponse')}</span> {t('howWeWork.responseValue')}
              </div>
            </div>
            
            <div className="text-center">
              <Button 
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-6 h-auto shadow-soft"
                onClick={() => navigate("/form")}
              >
                {t('howWeWork.cta')} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section - Iguazu */}
      <section className="h-[60vh] relative">
        <div 
          className="absolute inset-0 grid-overlay"
          style={{
            backgroundImage: `url(${iguazuImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
      </section>

      {/* What It Includes */}
      <section id="what-includes" className="py-24 md:py-32 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8 text-foreground">{t('whatIncludes.title')}</h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              {t('whatIncludes.intro')}
            </p>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4 p-6 bg-background rounded-lg shadow-soft">
                <ArrowRight className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-xl">{t('whatIncludes.point1')}</p>
              </div>
              <div className="flex items-start gap-4 p-6 bg-background rounded-lg shadow-soft">
                <ArrowRight className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-xl">{t('whatIncludes.point2')}</p>
              </div>
              <div className="flex items-start gap-4 p-6 bg-background rounded-lg shadow-soft">
                <ArrowRight className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-xl">{t('whatIncludes.point3')}</p>
              </div>
              <div className="flex items-start gap-4 p-6 bg-background rounded-lg shadow-soft">
                <ArrowRight className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-xl">{t('whatIncludes.point4')}</p>
              </div>
              <div className="flex items-start gap-4 p-6 bg-background rounded-lg shadow-soft">
                <ArrowRight className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-xl">{t('whatIncludes.point5')}</p>
              </div>
            </div>
            
            <p className="text-2xl font-semibold text-foreground text-center">
              {t('whatIncludes.conclusion')}
            </p>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section id="who-for" className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-8 text-foreground">{t('whoFor.title')}</h2>
            <p className="text-xl text-muted-foreground mb-8">{t('whoFor.subtitle')}</p>
            <p className="text-3xl md:text-4xl font-bold text-foreground leading-relaxed">
              {t('whoFor.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Image Section - Pampas */}
      <section className="h-[60vh] relative">
        <div 
          className="absolute inset-0 grid-overlay"
          style={{
            backgroundImage: `url(${pampasImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
      </section>

      {/* Who We Are */}
      <section id="who-we-are" className="py-24 md:py-32 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8 text-foreground">{t('whoWeAre.title')}</h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              {t('whoWeAre.intro')}
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-3" />
                  <p className="text-xl"><span className="font-semibold">{t('whoWeAre.realEstate')}</span> {t('whoWeAre.realEstateDetail')}</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-3" />
                  <p className="text-xl"><span className="font-semibold">{t('whoWeAre.engineering')}</span> {t('whoWeAre.engineeringDetail')}</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-3" />
                  <p className="text-xl"><span className="font-semibold">{t('whoWeAre.design')}</span> {t('whoWeAre.designDetail')}</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-3" />
                  <p className="text-xl"><span className="font-semibold">{t('whoWeAre.finance')}</span> {t('whoWeAre.financeDetail')}</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-3" />
                  <p className="text-xl"><span className="font-semibold">{t('whoWeAre.execution')}</span> {t('whoWeAre.executionDetail')}</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-3" />
                  <p className="text-xl"><span className="font-semibold">{t('whoWeAre.leadership')}</span> {t('whoWeAre.leadershipDetail')}</p>
                </div>
              </div>
            </div>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {t('whoWeAre.evaluation')}
            </p>
            
            <p className="text-2xl font-semibold text-foreground">
              {t('whoWeAre.conclusion')}
            </p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section id="contact" className="py-32 md:py-40 gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-8 text-white">{t('footerCta.title')}</h2>
            <p className="text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
              {t('footerCta.description')}
            </p>
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-xl px-12 py-8 h-auto shadow-medium"
              onClick={() => navigate("/form")}
            >
              {t('footerCta.cta')} <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
          
          <div className="border-t border-white/20 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
            <Logo variant="footer" className="[&_span]:text-white [&_svg]:text-white" />
            <div className="flex flex-col sm:flex-row gap-6 items-center text-lg opacity-90">
              <a href="mailto:contact@example.com" className="hover:underline transition-smooth">
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
