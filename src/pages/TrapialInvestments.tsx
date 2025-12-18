import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Logo } from "@/components/Logo";
import { Header } from "@/components/Header";
import { Link, useNavigate } from "react-router-dom";
import { Building, Leaf, FileText, TrendingUp, MapPin, Shield, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import investmentsHeroImage from "@/assets/investments-hero.jpg";
import vertientePremiumImage from "@/assets/vertiente-premium.jpg";
import mendozaVineyardImage from "@/assets/mendoza-vineyard-opp.jpg";
import cattlePatagoniaImage from "@/assets/cattle-patagonia.jpg";
import carbonCreditsImage from "@/assets/carbon-credits-forest.jpg";
import fishFarmingImage from "@/assets/fish-farming.jpg";
import strawberryFarmingImage from "@/assets/strawberry-farming.jpg";
import frigorificoImage from "@/assets/frigorifico.jpg";

const TrapialInvestments = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    { icon: Building, key: "realEstate" },
    { icon: Leaf, key: "agribusiness" },
    { icon: FileText, key: "dealStructuring" },
    { icon: TrendingUp, key: "assetManagement" },
    { icon: MapPin, key: "landDevelopment" },
    { icon: Shield, key: "dueDiligence" }
  ];

  const opportunities = [
    { key: "patagonia", image: vertientePremiumImage },
    { key: "vineyard", image: mendozaVineyardImage },
    { key: "agricultural", image: cattlePatagoniaImage },
    { key: "carbonCredits", image: carbonCreditsImage },
    { key: "fishFarming", image: fishFarmingImage },
    { key: "strawberries", image: strawberryFarmingImage },
    { key: "coldStorage", image: frigorificoImage }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header showCTA />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden pt-14 sm:pt-16">
        <div
          className="absolute inset-0 z-0 grid-overlay"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(${investmentsHeroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center text-white animate-fade-in">
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/20 text-primary-foreground text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-primary/30">
              {t('investmentsPage.hero.badge')}
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 px-2">
              {t('investmentsPage.hero.title')}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed opacity-90 mb-6 sm:mb-8 px-2">
              {t('investmentsPage.hero.subtitle')}
            </p>
            <Button size="lg" onClick={() => navigate('/form')} className="text-sm sm:text-base lg:text-lg px-6 sm:px-8">
              {t('investmentsPage.hero.cta')}
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Opportunities Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
              {t('investmentsPage.opportunities.title')}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
              {t('investmentsPage.opportunities.subtitle')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {opportunities.map((opp, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                {opp.image ? (
                  <div className="h-40 sm:h-48 overflow-hidden relative">
                    <img 
                      src={opp.image} 
                      alt={t(`investmentsPage.opportunities.${opp.key}.title`)}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent grid-overlay pointer-events-none" />
                  </div>
                ) : (
                  <div className="h-40 sm:h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <MapPin className="h-12 w-12 sm:h-16 sm:w-16 text-primary/40" />
                  </div>
                )}
                <div className="p-4 sm:p-5 md:p-6">
                  <span className="text-[10px] sm:text-xs font-medium text-primary uppercase tracking-wider">
                    {t(`investmentsPage.opportunities.${opp.key}.category`)}
                  </span>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mt-1.5 sm:mt-2 mb-2 sm:mb-3 text-foreground">
                    {t(`investmentsPage.opportunities.${opp.key}.title`)}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-3 sm:mb-4 line-clamp-3">
                    {t(`investmentsPage.opportunities.${opp.key}.description`)}
                  </p>
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-muted-foreground">
                      {t(`investmentsPage.opportunities.${opp.key}.location`)}
                    </span>
                    <span className="text-primary font-medium">
                      {t(`investmentsPage.opportunities.${opp.key}.status`)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Thesis Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
                {t('investmentsPage.thesis.title')}
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              <div className="bg-card border border-border rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-foreground">
                  {t('investmentsPage.thesis.opportunity.title')}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {t('investmentsPage.thesis.opportunity.description')}
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-foreground">
                  {t('investmentsPage.thesis.approach.title')}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {t('investmentsPage.thesis.approach.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
              {t('investmentsPage.services.title')}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
              {t('investmentsPage.services.subtitle')}
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
                    {t(`investmentsPage.services.${service.key}.title`)}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                    {t(`investmentsPage.services.${service.key}.description`)}
                  </p>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {[1, 2, 3].map((num) => (
                      <li key={num} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                        <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{t(`investmentsPage.services.${service.key}.point${num}`)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Expertise Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
              {t('investmentsPage.expertise.title')}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
              {t('investmentsPage.expertise.subtitle')}
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-card border border-border rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl sm:text-3xl font-bold text-primary">JP</span>
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                    {t('investmentsPage.expertise.lead.name')}
                  </h3>
                  <p className="text-sm sm:text-base text-primary">
                    {t('investmentsPage.expertise.lead.role')}
                  </p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 text-center sm:text-left">
                {t('investmentsPage.expertise.lead.description')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {['experience', 'track', 'network', 'approach'].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-muted-foreground">
                      {t(`investmentsPage.expertise.lead.${item}`)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
              {t('investmentsPage.cta.title')}
            </h2>
            <p className="text-base sm:text-lg md:text-xl opacity-90 mb-6 sm:mb-8 px-2">
              {t('investmentsPage.cta.description')}
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => navigate('/form')} 
              className="text-sm sm:text-base lg:text-lg px-6 sm:px-8"
            >
              {t('investmentsPage.cta.button')}
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
              <Link to="/tech" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
                Trapial Tech
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

export default TrapialInvestments;