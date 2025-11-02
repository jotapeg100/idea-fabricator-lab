import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Logo } from "@/components/Logo";
import heroImage from "@/assets/hero-patagonia.jpg";
import mendozaImage from "@/assets/mendoza-vineyards.jpg";
import iguazuImage from "@/assets/iguazu-falls.jpg";
import pampasImage from "@/assets/pampas-sunset.jpg";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      {/* Header / Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <Logo />
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
            Strategic investments in Argentina
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-12 max-w-3xl mx-auto font-light animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Discovery, analysis, and exclusive access to high-yield opportunities.
          </p>
          <Button 
            size="lg"
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto animate-fade-in shadow-medium"
            style={{ animationDelay: "0.4s" }}
            onClick={() => scrollToSection("contact")}
          >
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Why Argentina */}
      <section id="why-argentina" className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-8 text-foreground">Land of real opportunities</h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              Argentina possesses exceptional fundamentals that are not reflected in current valuations:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg">2nd largest global reserve of unconventional gas</p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg">4th largest global reserve of lithium</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg">Agricultural land among the most productive on the planet</p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg">World-class human capital</p>
                </div>
              </div>
            </div>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              The gap between intrinsic value and market price creates unique windows for informed investors.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section id="what-we-do" className="py-24 md:py-32 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-16 text-center text-foreground">Three competencies, one objective</h2>
            
            <div className="grid md:grid-cols-3 gap-12 mb-16">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
                <h3 className="text-2xl font-bold">Discovery</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We identify assets, businesses, and opportunities that are beyond the reach of conventional search.
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
                <h3 className="text-2xl font-bold">Analysis</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We develop complete business plans with verifiable projections and transparent assumptions.
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
                <h3 className="text-2xl font-bold">Exclusive representation</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We present each opportunity to a select group of validated investors, guaranteeing preferential access.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <Button 
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 h-auto shadow-soft"
                onClick={() => scrollToSection("contact")}
              >
                Explore Opportunities <ArrowRight className="ml-2 h-5 w-5" />
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
            <h2 className="mb-8 text-foreground">Validation process</h2>
            <p className="text-2xl text-muted-foreground mb-12 leading-relaxed">
              Why do we request information before sharing opportunities?
            </p>
            <p className="text-xl text-foreground mb-12 leading-relaxed">
              Because the information we handle is sensitive and the assets we represent are unique.
            </p>
            
            <div className="space-y-6 mb-16">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-7 w-7 text-primary flex-shrink-0 mt-1" />
                <p className="text-xl">Confirm seriousness and investment capacity</p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-7 w-7 text-primary flex-shrink-0 mt-1" />
                <p className="text-xl">Align opportunities with your specific profile</p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-7 w-7 text-primary flex-shrink-0 mt-1" />
                <p className="text-xl">Protect confidentiality of sellers</p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-7 w-7 text-primary flex-shrink-0 mt-1" />
                <p className="text-xl">Optimize your time by presenting only what's relevant</p>
              </div>
            </div>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              This step creates no commitment. It's simply the protocol that enables access to a curated pipeline of opportunities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 text-lg text-muted-foreground mb-12">
              <div className="flex-1">
                <span className="font-semibold text-foreground">Time required:</span> 3 minutes
              </div>
              <div className="flex-1">
                <span className="font-semibold text-foreground">Initial response:</span> 48 business hours
              </div>
            </div>
            
            <div className="text-center">
              <Button 
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-6 h-auto shadow-soft"
                onClick={() => scrollToSection("contact")}
              >
                Start Validation <ArrowRight className="ml-2 h-5 w-5" />
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
            <h2 className="mb-8 text-foreground">More than a teaser</h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Each opportunity presented includes complete documentation:
            </p>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4 p-6 bg-background rounded-lg shadow-soft">
                <ArrowRight className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-xl">Detailed business plan</p>
              </div>
              <div className="flex items-start gap-4 p-6 bg-background rounded-lg shadow-soft">
                <ArrowRight className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-xl">Financial projections with explicit assumptions</p>
              </div>
              <div className="flex items-start gap-4 p-6 bg-background rounded-lg shadow-soft">
                <ArrowRight className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-xl">Risk analysis contextualized to the Argentine market</p>
              </div>
              <div className="flex items-start gap-4 p-6 bg-background rounded-lg shadow-soft">
                <ArrowRight className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-xl">Preliminary due diligence</p>
              </div>
              <div className="flex items-start gap-4 p-6 bg-background rounded-lg shadow-soft">
                <ArrowRight className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-xl">Temporary exclusivity terms</p>
              </div>
            </div>
            
            <p className="text-2xl font-semibold text-foreground text-center">
              We don't share "ideas." We share structured investment cases.
            </p>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section id="who-for" className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-8 text-foreground">Investor profile</h2>
            <p className="text-xl text-muted-foreground mb-8">This service is for:</p>
            <p className="text-3xl md:text-4xl font-bold text-foreground leading-relaxed">
              Family Offices and Individual Investors Seeking Direct Exposure to Argentine Assets
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
            <h2 className="mb-8 text-foreground">Background that matters</h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Consultancy founded by a professional with experience in:
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-3" />
                  <p className="text-xl"><span className="font-semibold">Computer engineering</span> (technical analysis)</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-3" />
                  <p className="text-xl"><span className="font-semibold">Design</span> (product vision)</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-3" />
                  <p className="text-xl"><span className="font-semibold">Finance</span> (modeling and projections)</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-3" />
                  <p className="text-xl"><span className="font-semibold">Project execution</span> (real implementation)</p>
                </div>
              </div>
            </div>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              This combination enables evaluating opportunities from multiple angles: technical viability, market potential, financial return, and execution feasibility.
            </p>
            
            <p className="text-2xl font-semibold text-foreground">
              We are not generalist intermediaries. We are specialists in value discovery and analysis.
            </p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section id="contact" className="py-32 md:py-40 gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-8 text-white">Next step</h2>
            <p className="text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
              Complete the validation form. We'll respond within 48 business hours with next steps.
            </p>
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-xl px-12 py-8 h-auto shadow-medium"
            >
              Request Access to Opportunities <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
          
          <div className="border-t border-white/20 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
            <Logo variant="footer" className="[&_span]:text-white [&_svg]:text-white" />
            <div className="flex flex-col sm:flex-row gap-6 items-center text-lg opacity-90">
              <a href="mailto:contact@example.com" className="hover:underline transition-smooth">
                Contact
              </a>
              <a href="#" className="hover:underline transition-smooth">
                LinkedIn
              </a>
              <a href="#" className="hover:underline transition-smooth">
                Terms & Privacy
              </a>
            </div>
            <p className="text-sm opacity-75">
              © 2025 Pampa Ventures
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
