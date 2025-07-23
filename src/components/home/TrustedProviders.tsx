import { Card, CardContent } from "@/components/ui/card";
import { Shield, Star, CheckCircle } from "lucide-react";

const TrustedProviders = () => {
  // Mock provider data - in real app this would come from Supabase
  const providers = [
    { name: "ADT Security", rating: 4.8, reviews: 1250, logo: "🛡️" },
    { name: "G4S Security", rating: 4.6, reviews: 980, logo: "🔒" },
    { name: "Verisure", rating: 4.7, reviews: 850, logo: "⚡" },
    { name: "Yale Security", rating: 4.5, reviews: 720, logo: "🏠" },
    { name: "Banham Security", rating: 4.9, reviews: 650, logo: "🔐" },
    { name: "Churchill Security", rating: 4.6, reviews: 580, logo: "🛡️" },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Shield className="w-4 h-4" />
            SIA Registered & Vetted
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Trusted by Leading UK Security Providers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            All our partner providers are SIA-registered, fully insured, and have been carefully vetted 
            to ensure you receive the highest quality security solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {providers.map((provider, index) => (
            <Card key={index} className="text-center hover:shadow-medium transition-shadow">
              <CardContent className="p-6">
                <div className="text-4xl mb-3">{provider.logo}</div>
                <h3 className="font-semibold text-foreground mb-2">{provider.name}</h3>
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Star className="w-4 h-4 text-warning fill-current" />
                  <span className="text-sm font-medium">{provider.rating}</span>
                </div>
                <p className="text-xs text-muted-foreground">{provider.reviews} reviews</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="bg-card rounded-xl p-8 shadow-soft">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">SIA Licensed</h3>
              <p className="text-sm text-muted-foreground">
                All providers hold valid SIA licenses and are fully compliant with UK security regulations.
              </p>
            </div>
            
            <div>
              <div className="bg-success/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-success" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Fully Insured</h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive public liability and professional indemnity insurance coverage.
              </p>
            </div>
            
            <div>
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Quality Assured</h3>
              <p className="text-sm text-muted-foreground">
                Regular quality checks and customer feedback monitoring to maintain high standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedProviders;