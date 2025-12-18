import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Logo } from "@/components/Logo";
import { Header } from "@/components/Header";
import { Link, useNavigate } from "react-router-dom";
import { Code, Cpu, CreditCard, Database, Shield, Zap, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import techHeroImage from "@/assets/tech-hero.jpg";

const TrapialTech = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    { icon: Code, key: "customDev" },
    { icon: Cpu, key: "ai" },
    { icon: CreditCard, key: "fintech" },
    { icon: Database, key: "blockchain" },
    { icon: Shield, key: "consulting" },
    { icon: Zap, key: "integration" }
  ];

  const caseStudies = [
    { key: "asamblo" },
    { key: "fintech" },
    { key: "automation" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header showCTA />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden pt-14 sm:pt-16">
        <div
          className="absolute inset-0 z-0 grid-overlay"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${techHeroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center text-white animate-fade-in">
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/20 text-primary-foreground text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-primary/30">
              {t('techPage.hero.badge')}
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 px-2">
              {t('techPage.hero.title')}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed opacity-90 mb-6 sm:mb-8 px-2">
              {t('techPage.hero.subtitle')}
            </p>
            <Button size="lg" onClick={() => navigate('/form_tech')} className="text-sm sm:text-base lg:text-lg px-6 sm:px-8">
              {t('techPage.hero.cta')}
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
              {t('techPage.services.title')}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
              {t('techPage.services.subtitle')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 hover:shadow-lg transition-all duration-300 hover:border-primary/30"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center mb-4 sm:mb-6">
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-foreground">
                    {t(`techPage.services.${service.key}.title`)}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                    {t(`techPage.services.${service.key}.description`)}
                  </p>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {[1, 2, 3].map((num) => (
                      <li key={num} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                        <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{t(`techPage.services.${service.key}.point${num}`)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies Section - Moved above Technical Leadership */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
              {t('techPage.caseStudies.title')}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
              {t('techPage.caseStudies.subtitle')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {caseStudies.map((study, index) => {
              const isAsamblo = study.key === 'asamblo';
              const CardWrapper = isAsamblo ? 'a' : 'div';
              const cardProps = isAsamblo ? {
                href: 'https://clutch.co/profile/asamblo',
                target: '_blank',
                rel: 'noopener noreferrer'
              } : {};
              
              return (
                <div key={index}>
                  <CardWrapper
                    {...cardProps}
                    className={`block bg-card border border-border rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 h-full ${isAsamblo ? 'cursor-pointer hover:border-primary/50' : ''}`}
                  >
                    <div className="h-36 sm:h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative">
                      <span className="text-4xl sm:text-6xl font-bold text-primary/30">0{index + 1}</span>
                    </div>
                    <div className="p-4 sm:p-5 md:p-6">
                      <span className="text-[10px] sm:text-xs font-medium text-primary uppercase tracking-wider">
                        {t(`techPage.caseStudies.${study.key}.category`)}
                      </span>
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold mt-1.5 sm:mt-2 mb-2 sm:mb-3 text-foreground">
                        {t(`techPage.caseStudies.${study.key}.title`)}
                      </h3>
                      <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-3 sm:mb-4">
                        {t(`techPage.caseStudies.${study.key}.description`)}
                      </p>
                      {isAsamblo ? (
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-primary font-medium">
                          <span>{t(`techPage.caseStudies.${study.key}.cta`)}</span>
                          <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        </div>
                      ) : (
                        <div className="flex items-center gap-4 text-xs sm:text-sm">
                          <span className="text-primary font-medium">
                            {t(`techPage.caseStudies.${study.key}.result`)}
                          </span>
                        </div>
                      )}
                    </div>
                  </CardWrapper>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Expertise Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
              {t('techPage.expertise.title')}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
              {t('techPage.expertise.subtitle')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
            {['luciano', 'nicolas', 'juanpablo'].map((member) => (
              <div 
                key={member}
                className="bg-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 text-center"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/10 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                  <span className="text-xl sm:text-2xl font-bold text-primary">
                    {member === 'luciano' ? 'LM' : member === 'nicolas' ? 'NS' : 'JP'}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1">
                  {t(`techPage.expertise.${member}.name`)}
                </h3>
                <p className="text-xs sm:text-sm text-primary mb-2 sm:mb-3">
                  {t(`techPage.expertise.${member}.role`)}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {t(`techPage.expertise.${member}.focus`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
              {t('techPage.cta.title')}
            </h2>
            <p className="text-base sm:text-lg md:text-xl opacity-90 mb-6 sm:mb-8 px-2">
              {t('techPage.cta.description')}
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => navigate('/form_tech')} 
              className="text-sm sm:text-base lg:text-lg px-6 sm:px-8"
            >
              {t('techPage.cta.button')}
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 bg-background border-t border-border">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col gap-4 sm:gap-6 md:flex-row md:justify-between md:items-center">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
              <Logo variant="footer" />
              <span className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">{t('footerCta.copyright')}</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <Link to="/about" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t('header.aboutUs')}
              </Link>
              <Link to="/investments" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
                Trapial Investments
              </Link>
              <a 
                href="https://www.linkedin.com/company/trapial" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('footerCta.linkedin')}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TrapialTech;