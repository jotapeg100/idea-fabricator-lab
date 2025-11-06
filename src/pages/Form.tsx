import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Logo } from "@/components/Logo";

const AccessForm = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <button 
            onClick={() => navigate("/")} 
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Back to home"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </button>
          <Logo />
        </div>
      </header>

      {/* Page Content */}
      <div className="container mx-auto px-4 sm:px-6 pt-24 pb-12">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Request Access to Opportunities
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Complete the validation form below. We'll respond within 48 business hours with next steps.
          </p>
        </div>

        {/* Google Form Embed */}
        <div className="flex justify-center items-start">
          <div className="w-full max-w-4xl bg-card rounded-lg shadow-sm overflow-hidden">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSeRZiB_reke7OWMRuW1LFc32_sZPA006m6n31seVSkKdop_9Q/viewform?embedded=true" 
              width="100%" 
              height="2400" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0}
              className="w-full min-h-[2400px]"
              title="Trapial Ventures - Access Request Form"
              loading="lazy"
            >
              Loading form…
            </iframe>
          </div>
        </div>

        {/* Footer Note */}
        <div className="max-w-3xl mx-auto text-center mt-8 sm:mt-12">
          <p className="text-sm text-muted-foreground">
            <strong>Time required:</strong> 3 minutes • <strong>Response:</strong> 48 business hours
          </p>
          <p className="text-xs text-muted-foreground mt-4">
            This validation step creates no commitment. It's simply the protocol that enables access to our curated pipeline of opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccessForm;
