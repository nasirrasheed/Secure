import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, CheckCircle, Clock, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-home-security.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-background via-muted/30 to-primary/5 py-20 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src={heroImage} 
          alt="Professional Security Services" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium">
                <CheckCircle className="w-4 h-4" />
                SIA Registered Providers Only
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                UK's Most Trusted
                <span className="text-primary block">Security Comparison</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Connect with vetted, SIA-registered security providers across the UK. 
                Get free quotes for home and business security solutions in minutes.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span>100% Free Service</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span>2-Minute Quote Form</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span>50+ Trusted Providers</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="xl" asChild className="flex-1 sm:flex-none">
                <Link to="/domestic">
                  <Shield className="w-5 h-5" />
                  Home Security Quote
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild className="flex-1 sm:flex-none">
                <Link to="/commercial">
                  Business Security Quote
                </Link>
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 bg-primary/20 rounded-full border-2 border-background flex items-center justify-center">
                    <Users className="w-4 h-4 text-primary" />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-1 text-warning">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-muted-foreground">Trusted by 10,000+ customers</span>
              </div>
            </div>
          </div>

          {/* Right Column - Quote Form Preview */}
          <div className="lg:justify-self-end w-full max-w-lg">
            <Card className="shadow-large border-0 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Get Your Free Quote</h3>
                  <p className="text-muted-foreground">Compare prices from top UK security providers</p>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="h-12 justify-start" asChild>
                      <Link to="/domestic">
                        🏠 Home Security
                      </Link>
                    </Button>
                    <Button variant="outline" className="h-12 justify-start" asChild>
                      <Link to="/commercial">
                        🏢 Business Security
                      </Link>
                    </Button>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-4 text-center">
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <div className="text-2xl font-bold text-primary">2 min</div>
                        <div className="text-muted-foreground">Quick Form</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">3+</div>
                        <div className="text-muted-foreground">Free Quotes</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">£0</div>
                        <div className="text-muted-foreground">No Cost</div>
                      </div>
                    </div>
                  </div>

                  <div className="text-xs text-muted-foreground text-center">
                    ✓ No spam calls ✓ GDPR compliant ✓ SIA registered providers only
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;