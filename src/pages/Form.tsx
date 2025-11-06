import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { ArrowLeft, CheckCircle2, Clock, Lock } from "lucide-react";
import { Logo } from "@/components/Logo";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required").max(100),
  email: z.string().email("Invalid email address").max(255),
  phone: z.string().min(5, "Phone number is required").max(20),
  country: z.string().min(1, "Country is required"),
  investorProfile: z.string().min(1, "Please select your profile"),
  investmentRange: z.string().min(1, "Please select an investment range"),
  opportunityTypes: z.array(z.string()).min(1, "Select at least one opportunity type"),
  regions: z.array(z.string()),
  investmentHorizon: z.string().min(1, "Please select an investment horizon"),
  experience: z.string().min(1, "Please select your experience level"),
  howHeard: z.string().optional(),
  additionalInfo: z.string().max(1000).optional(),
  confirmCapacity: z.boolean().refine((val) => val === true, {
    message: "You must confirm your investment capacity",
  }),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and privacy policy",
  }),
});

type FormData = z.infer<typeof formSchema>;

const AccessForm = () => {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      country: "",
      investorProfile: "",
      investmentRange: "",
      opportunityTypes: [],
      regions: [],
      investmentHorizon: "",
      experience: "",
      howHeard: "",
      additionalInfo: "",
      confirmCapacity: false,
      acceptTerms: false,
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    toast.success("Request received! We'll respond within 48 hours.");
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="max-w-2xl w-full text-center space-y-6">
          <CheckCircle2 className="w-20 h-20 mx-auto text-primary" />
          <h1 className="text-4xl font-bold">Request Received</h1>
          <div className="space-y-4 text-muted-foreground">
            <p className="text-lg">Thank you for your interest in Trapial Group.</p>
            <p>We have received your information and are reviewing it.</p>
            <div className="bg-muted/50 rounded-lg p-6 space-y-3 text-left">
              <h3 className="font-semibold text-foreground">Next steps:</h3>
              <ul className="space-y-2">
                <li>→ We will review your profile within the next 48 business hours</li>
                <li>→ You will receive an email with opportunities aligned with your criteria</li>
                <li>→ We will coordinate an initial call to discuss specific projects</li>
              </ul>
            </div>
            <p className="text-sm">
              While you wait, you can explore our{" "}
              <button onClick={() => navigate("/")} className="text-primary hover:underline">
                project portfolio
              </button>
            </p>
          </div>
          <Button onClick={() => navigate("/")} size="lg">
            Return to Home
          </Button>
        </div>
      </div>
    );
  }

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

      {/* Form Content */}
      <div className="container mx-auto px-6 py-24 max-w-4xl">
        {/* Header Section */}
        <div className="mb-12 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            Access Request to Opportunities
          </h1>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
            Complete this form to access our pipeline of real estate opportunities in Patagonia. 
            The process takes 3 minutes and allows us to present you only with projects aligned 
            with your profile and investment capacity.
          </p>
          <p className="text-sm text-muted-foreground text-center">
            This form does not create any commercial commitment. It simply enables access to 
            information we handle with confidentiality.
          </p>
          
          {/* Info Badges */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>Estimated time: 3 minutes</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Lock className="w-4 h-4" />
              <span>Confidential information</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle2 className="w-4 h-4" />
              <span>Response within 48 hours</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
            {/* Section 1: Basic Information */}
            <div className="bg-card rounded-lg border border-border p-8 space-y-6">
              <h2 className="text-2xl font-bold">1. Basic Information</h2>
              
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email *</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="john@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone / WhatsApp *</FormLabel>
                    <FormControl>
                      <Input placeholder="+1 234 567 8900" {...field} />
                    </FormControl>
                    <FormDescription>Only for initial call coordination</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country of Residence *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a country" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="argentina">Argentina</SelectItem>
                        <SelectItem value="chile">Chile</SelectItem>
                        <SelectItem value="uruguay">Uruguay</SelectItem>
                        <SelectItem value="brazil">Brazil</SelectItem>
                        <SelectItem value="usa">United States</SelectItem>
                        <SelectItem value="mexico">Mexico</SelectItem>
                        <SelectItem value="spain">Spain</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Section 2: Investor Profile */}
            <div className="bg-card rounded-lg border border-border p-8 space-y-6">
              <h2 className="text-2xl font-bold">2. Investor Profile</h2>

              <FormField
                control={form.control}
                name="investorProfile"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Which best describes your profile? *</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="individual" id="individual" />
                          <Label htmlFor="individual">Individual investor / Family Office</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="fund" id="fund" />
                          <Label htmlFor="fund">Investment fund</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="developer" id="developer" />
                          <Label htmlFor="developer">Real estate developer</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="company" id="company" />
                          <Label htmlFor="company">Company (tourism, energy, agro-industrial)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="other" id="other" />
                          <Label htmlFor="other">Other</Label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="investmentRange"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Investment range of interest *</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="150k-500k" id="range1" />
                          <Label htmlFor="range1">USD 150K - 500K</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="500k-1m" id="range2" />
                          <Label htmlFor="range2">USD 500K - 1M</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="1m-3m" id="range3" />
                          <Label htmlFor="range3">USD 1M - 3M</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="3m-10m" id="range4" />
                          <Label htmlFor="range4">USD 3M - 10M</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="10m+" id="range5" />
                          <Label htmlFor="range5">USD 10M+</Label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormDescription>
                      This information allows us to present you only opportunities within your range
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Section 3: Areas of Interest */}
            <div className="bg-card rounded-lg border border-border p-8 space-y-6">
              <h2 className="text-2xl font-bold">3. Areas of Interest</h2>

              <FormField
                control={form.control}
                name="opportunityTypes"
                render={() => (
                  <FormItem>
                    <div className="mb-4">
                      <FormLabel>What type of opportunities interest you? *</FormLabel>
                      <FormDescription>Select all that apply</FormDescription>
                    </div>
                    {[
                      { id: "urban", label: "Urban / peri-urban lots (growing cities)" },
                      { id: "tourism", label: "Tourism development (hotels, lodges, complexes)" },
                      { id: "commercial", label: "Strategic commercial properties" },
                      { id: "land", label: "Land for energy / agro-industry" },
                      { id: "mixed", label: "Mixed projects (residential + commercial)" },
                      { id: "open", label: "Open to different types" },
                    ].map((item) => (
                      <FormField
                        key={item.id}
                        control={form.control}
                        name="opportunityTypes"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={item.id}
                              className="flex flex-row items-start space-x-3 space-y-0 py-2"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(item.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, item.id])
                                      : field.onChange(
                                          field.value?.filter((value) => value !== item.id)
                                        );
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">{item.label}</FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="regions"
                render={() => (
                  <FormItem>
                    <div className="mb-4">
                      <FormLabel>Regions of interest in Patagonia (Optional)</FormLabel>
                    </div>
                    {[
                      { id: "neuquen", label: "Neuquén (capital + energy corridor)" },
                      { id: "bariloche", label: "San Carlos de Bariloche / Villa La Angostura" },
                      { id: "madryn", label: "Puerto Madryn / Atlantic Coast" },
                      { id: "ushuaia", label: "Ushuaia / Tierra del Fuego" },
                      { id: "calafate", label: "El Calafate / Santa Cruz" },
                      { id: "no-preference", label: "No specific preference" },
                    ].map((item) => (
                      <FormField
                        key={item.id}
                        control={form.control}
                        name="regions"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={item.id}
                              className="flex flex-row items-start space-x-3 space-y-0 py-2"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(item.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, item.id])
                                      : field.onChange(
                                          field.value?.filter((value) => value !== item.id)
                                        );
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">{item.label}</FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Section 4: Timeline and Experience */}
            <div className="bg-card rounded-lg border border-border p-8 space-y-6">
              <h2 className="text-2xl font-bold">4. Timeline and Experience</h2>

              <FormField
                control={form.control}
                name="investmentHorizon"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Investment horizon *</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="short" id="short" />
                          <Label htmlFor="short">Short term (1-3 years)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="medium" id="medium" />
                          <Label htmlFor="medium">Medium term (3-7 years)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="long" id="long" />
                          <Label htmlFor="long">Long term (7+ years)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="flexible" id="flexible" />
                          <Label htmlFor="flexible">Flexible depending on opportunity</Label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="experience"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Previous experience in real estate investments *</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="first" id="first" />
                          <Label htmlFor="first">First real estate investment</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="some" id="some" />
                          <Label htmlFor="some">Some investments (1-3 projects)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="experienced" id="experienced" />
                          <Label htmlFor="experienced">Experienced investor (4+ projects)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="professional" id="professional" />
                          <Label htmlFor="professional">Industry professional</Label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Section 5: Additional Context */}
            <div className="bg-card rounded-lg border border-border p-8 space-y-6">
              <h2 className="text-2xl font-bold">5. Additional Context</h2>

              <FormField
                control={form.control}
                name="howHeard"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>How did you learn about Trapial Group? (Optional)</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="linkedin">LinkedIn</SelectItem>
                        <SelectItem value="referral">Referred by someone</SelectItem>
                        <SelectItem value="search">Web search</SelectItem>
                        <SelectItem value="article">Article / Publication</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="additionalInfo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Anything else we should know about your search? (Optional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us more about what you're looking for..."
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Section 6: Confirmation */}
            <div className="bg-card rounded-lg border border-border p-8 space-y-6">
              <h2 className="text-2xl font-bold">6. Confirmation</h2>

              <FormField
                control={form.control}
                name="confirmCapacity"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        I confirm that I have investment capacity consistent with the selected 
                        range and am actively evaluating opportunities in the next 3-6 months. *
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="acceptTerms"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        I accept the Terms of Use and Privacy Policy *
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              <div className="bg-muted/50 rounded-lg p-4 text-sm text-muted-foreground">
                <p className="font-semibold text-foreground mb-2">Data Protection</p>
                <p>
                  The data shared will be used exclusively to evaluate the alignment between 
                  your profile and our current opportunities. We do not share information with 
                  third parties. You may request deletion of your data at any time by writing 
                  to contact@trapialventures.com.
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <Button type="submit" size="lg" className="min-w-[200px]">
                Request Access
              </Button>
            </div>

            <p className="text-sm text-muted-foreground text-center">
              We will respond within 48 business hours with next steps.
            </p>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default AccessForm;