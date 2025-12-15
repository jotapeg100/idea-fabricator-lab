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
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-16">
        <div
          className="absolute inset-0 z-0 grid-overlay"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${techHeroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white animate-fade-in">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium mb-6 border border-primary/30">
              {t('techPage.hero.badge')}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t('techPage.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90 mb-8">
              {t('techPage.hero.subtitle')}
            </p>
            <Button size="lg" onClick={() => navigate('/form_tech')} className="text-lg px-8">
              {t('techPage.hero.cta')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {t('techPage.services.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('techPage.services.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:border-primary/30"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {t(`techPage.services.${service.key}.title`)}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {t(`techPage.services.${service.key}.description`)}
                  </p>
                  <ul className="space-y-2">
                    {[1, 2, 3].map((num) => (
                      <li key={num} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
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
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {t('techPage.caseStudies.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('techPage.caseStudies.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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
                    className={`block bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 h-full ${isAsamblo ? 'cursor-pointer hover:border-primary/50' : ''}`}
                  >
                    <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative">
                      <span className="text-6xl font-bold text-primary/30">0{index + 1}</span>
                    </div>
                    <div className="p-6">
                      <span className="text-xs font-medium text-primary uppercase tracking-wider">
                        {t(`techPage.caseStudies.${study.key}.category`)}
                      </span>
                      <h3 className="text-xl font-semibold mt-2 mb-3 text-foreground">
                        {t(`techPage.caseStudies.${study.key}.title`)}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {t(`techPage.caseStudies.${study.key}.description`)}
                      </p>
                      {isAsamblo ? (
                        <div className="flex items-center gap-2 text-sm text-primary font-medium">
                          <span>{t(`techPage.caseStudies.${study.key}.cta`)}</span>
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      ) : (
                        <div className="flex items-center gap-4 text-sm">
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
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {t('techPage.expertise.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('techPage.expertise.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {['luciano', 'nicolas', 'juanpablo'].map((member) => (
              <div 
                key={member}
                className="bg-card border border-border rounded-2xl p-6 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">
                    {member === 'luciano' ? 'LM' : member === 'nicolas' ? 'NS' : 'JP'}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {t(`techPage.expertise.${member}.name`)}
                </h3>
                <p className="text-sm text-primary mb-3">
                  {t(`techPage.expertise.${member}.role`)}
                </p>
                <p className="text-sm text-muted-foreground">
                  {t(`techPage.expertise.${member}.focus`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('techPage.cta.title')}
            </h2>
            <p className="text-xl opacity-90 mb-8">
              {t('techPage.cta.description')}
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => navigate('/form_tech')} 
              className="text-lg px-8"
            >
              {t('techPage.cta.button')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Logo variant="footer" />
              <span className="text-sm text-muted-foreground">{t('footerCta.copyright')}</span>
            </div>
            <div className="flex items-center gap-6">
              <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t('header.aboutUs')}
              </Link>
              <Link to="/investments" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Trapial Investments
              </Link>
              <a 
                href="https://www.linkedin.com/company/trapial" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
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