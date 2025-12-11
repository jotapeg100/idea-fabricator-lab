import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Logo } from "@/components/Logo";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Building, Leaf, FileText, TrendingUp, MapPin, Shield, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import investmentsHeroImage from "@/assets/investments-hero.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

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
    { key: "patagonia" },
    { key: "vineyard" },
    { key: "agricultural" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/">
            <Logo />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              {t('investmentsPage.nav.home')}
            </Link>
            <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
              {t('header.aboutUs')}
            </Link>
            <Link to="/tech" className="text-muted-foreground hover:text-foreground transition-colors">
              {t('investmentsPage.nav.tech')}
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Button onClick={() => navigate('/form')} size="sm">
              {t('header.getStarted')}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-16">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(${investmentsHeroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center text-white"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
            variants={fadeInUp}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium mb-6 border border-primary/30">
              {t('investmentsPage.hero.badge')}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t('investmentsPage.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90 mb-8">
              {t('investmentsPage.hero.subtitle')}
            </p>
            <Button size="lg" onClick={() => navigate('/form')} className="text-lg px-8">
              {t('investmentsPage.hero.cta')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Investment Thesis Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            variants={fadeInUp}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                {t('investmentsPage.thesis.title')}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {t('investmentsPage.thesis.opportunity.title')}
                </h3>
                <p className="text-muted-foreground">
                  {t('investmentsPage.thesis.opportunity.description')}
                </p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {t('investmentsPage.thesis.approach.title')}
                </h3>
                <p className="text-muted-foreground">
                  {t('investmentsPage.thesis.approach.description')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {t('investmentsPage.services.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('investmentsPage.services.subtitle')}
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div 
                  key={index}
                  className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:border-primary/30"
                  variants={fadeInUp}
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {t(`investmentsPage.services.${service.key}.title`)}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {t(`investmentsPage.services.${service.key}.description`)}
                  </p>
                  <ul className="space-y-2">
                    {[1, 2, 3].map((num) => (
                      <li key={num} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{t(`investmentsPage.services.${service.key}.point${num}`)}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Team Expertise Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {t('investmentsPage.expertise.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('investmentsPage.expertise.subtitle')}
            </p>
          </motion.div>

          <motion.div 
            className="max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary">JP</span>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-semibold text-foreground">
                    {t('investmentsPage.expertise.lead.name')}
                  </h3>
                  <p className="text-primary">
                    {t('investmentsPage.expertise.lead.role')}
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                {t('investmentsPage.expertise.lead.description')}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['experience', 'track', 'network', 'approach'].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      {t(`investmentsPage.expertise.lead.${item}`)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Opportunities Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {t('investmentsPage.opportunities.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('investmentsPage.opportunities.subtitle')}
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {opportunities.map((opp, index) => (
              <motion.div 
                key={index}
                className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
                variants={fadeInUp}
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <MapPin className="h-16 w-16 text-primary/40" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">
                    {t(`investmentsPage.opportunities.${opp.key}.category`)}
                  </span>
                  <h3 className="text-xl font-semibold mt-2 mb-3 text-foreground">
                    {t(`investmentsPage.opportunities.${opp.key}.title`)}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {t(`investmentsPage.opportunities.${opp.key}.description`)}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      {t(`investmentsPage.opportunities.${opp.key}.location`)}
                    </span>
                    <span className="text-primary font-medium">
                      {t(`investmentsPage.opportunities.${opp.key}.status`)}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('investmentsPage.cta.title')}
            </h2>
            <p className="text-xl opacity-90 mb-8">
              {t('investmentsPage.cta.description')}
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => navigate('/form')} 
              className="text-lg px-8"
            >
              {t('investmentsPage.cta.button')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
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
              <Link to="/tech" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Trapial Tech
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

export default TrapialInvestments;
