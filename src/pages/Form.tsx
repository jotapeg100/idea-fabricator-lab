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
          <button onClick={() => navigate("/")} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </button>
          <Logo />
        </div>
      </header>

      {/* Google Form Embed */}
      <div className="container mx-auto px-6 py-24">
        <div className="flex justify-center items-center">
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSeRZiB_reke7OWMRuW1LFc32_sZPA006m6n31seVSkKdop_9Q/viewform?embedded=true" 
            width="100%" 
            height="2400" 
            frameBorder="0" 
            marginHeight={0} 
            marginWidth={0}
            className="max-w-4xl w-full"
            title="Access Request Form"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default AccessForm;