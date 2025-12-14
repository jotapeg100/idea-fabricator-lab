import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Logo } from "@/components/Logo";
import { Header } from "@/components/Header";
import { Link } from "react-router-dom";
import aboutHeroImage from "@/assets/about-hero.jpg";

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
      <Header />

      {/* Intro Section with Hero Background */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${aboutHeroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">{t('about.intro.title')}</h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90">
              {t('about.intro.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Our History Section */}
      <section className="py-16 md:py-24 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
              {t('about.history.title')}
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>{t('about.history.paragraph1')}</p>
              <p>{t('about.history.paragraph2')}</p>
              <p>{t('about.history.paragraph3')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
              {t('about.team.title')}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 transition-transform duration-200 hover:-translate-y-2"
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
              {t('about.values.title')}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="bg-background rounded-2xl p-8 shadow-soft transition-transform duration-200 hover:scale-[1.02]"
                >
                  <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 gradient-hero text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              {t('about.cta.title')}
            </h2>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed opacity-90">
              {t('about.cta.description')}
            </p>
            <Link to="/form">
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 text-lg px-10 py-7 h-auto shadow-medium"
              >
                {t('about.cta.button')} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
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
