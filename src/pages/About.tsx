import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Logo } from "@/components/Logo";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const About = () => {
  const { t } = useTranslation();

  const team = [
    {
      name: "Luciano Mazzola",
      role: t('about.team.luciano.role'),
      description: t('about.team.luciano.description'),
      specialties: t('about.team.luciano.specialties'),
      linkedin: "https://linkedin.com/in/lucianomazzola"
    },
    {
      name: "Nicolás Sosa",
      role: t('about.team.nicolas.role'),
      description: t('about.team.nicolas.description'),
      specialties: t('about.team.nicolas.specialties'),
      linkedin: "https://linkedin.com/in/nicolassosa"
    },
    {
      name: "Juan Pablo González",
      role: t('about.team.juanpablo.role'),
      description: t('about.team.juanpablo.description'),
      specialties: t('about.team.juanpablo.specialties'),
      linkedin: "https://linkedin.com/in/jpgonzalez68"
    }
  ];

  const values = [
    {
      title: t('about.values.execution.title'),
      description: t('about.values.execution.description')
    },
    {
      title: t('about.values.transparency.title'),
      description: t('about.values.transparency.description')
    },
    {
      title: t('about.values.longTerm.title'),
      description: t('about.values.longTerm.description')
    },
    {
      title: t('about.values.quality.title'),
      description: t('about.values.quality.description')
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header / Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/">
            <Logo />
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-smooth">
              {t('about.nav.home')}
            </Link>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      {/* Intro Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            variants={fadeInUp}
          >
            <h1 className="mb-8 text-foreground">{t('about.intro.title')}</h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              {t('about.intro.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our History Section */}
      <section className="py-16 md:py-24 gradient-subtle">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="mb-8 text-foreground"
              variants={fadeInLeft}
              transition={{ duration: 0.5 }}
            >
              {t('about.history.title')}
            </motion.h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <motion.p variants={fadeInUp} transition={{ duration: 0.5 }}>{t('about.history.paragraph1')}</motion.p>
              <motion.p variants={fadeInUp} transition={{ duration: 0.5 }}>{t('about.history.paragraph2')}</motion.p>
              <motion.p variants={fadeInUp} transition={{ duration: 0.5 }}>{t('about.history.paragraph3')}</motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="mb-12 text-center text-foreground"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
            >
              {t('about.team.title')}
            </motion.h2>
            
            <motion.div 
              className="grid md:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {team.map((member, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8"
                  variants={fadeInUp}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                >
                  <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{member.description}</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    <span className="font-semibold text-foreground">{t('about.team.specialtiesLabel')}</span> {member.specialties}
                  </p>
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-smooth"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="mb-12 text-center text-foreground"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
            >
              {t('about.values.title')}
            </motion.h2>
            
            <motion.div 
              className="grid md:grid-cols-2 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {values.map((value, index) => (
                <motion.div 
                  key={index} 
                  className="bg-background rounded-2xl p-8 shadow-soft"
                  variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                  <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 gradient-hero text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="mb-6 text-white"
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
            >
              {t('about.cta.title')}
            </motion.h2>
            <motion.p 
              className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed opacity-90"
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
            >
              {t('about.cta.description')}
            </motion.p>
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
            >
              <Link to="/form">
                <Button 
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 text-lg px-10 py-7 h-auto shadow-medium"
                >
                  {t('about.cta.button')} <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Logo variant="footer" className="[&_span]:text-white [&_svg]:text-white" />
            <p className="text-sm opacity-75">
              {t('footerCta.copyright')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
