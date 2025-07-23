import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Shield, Home, Camera, Bell, KeyRound, CheckCircle } from "lucide-react";

const Domestic = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Home className="w-4 h-4" />
              Home Security Solutions
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Protect Your Home with Professional Security Systems
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get free quotes from SIA-registered security providers. Compare prices for CCTV, 
              alarms, and smart home security solutions tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Quote Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-large">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <Shield className="w-6 h-6 text-primary" />
                    Get Your Free Home Security Quote
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Complete this form to receive up to 3 free quotes from vetted security providers in your area.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" type="tel" placeholder="07700 900000" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="address">Property Address *</Label>
                    <Input id="address" placeholder="Enter your full address" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="postcode">Postcode *</Label>
                      <Input id="postcode" placeholder="SW1A 1AA" />
                    </div>
                    <div>
                      <Label htmlFor="propertyType">Property Type *</Label>
                      <select className="w-full h-10 px-3 rounded-md border border-input bg-background">
                        <option value="">Select property type</option>
                        <option value="house">House</option>
                        <option value="flat">Flat/Apartment</option>
                        <option value="bungalow">Bungalow</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label className="text-base font-medium mb-3 block">
                      What security services are you interested in? *
                    </Label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        { id: "cctv", label: "CCTV Security Cameras" },
                        { id: "alarm", label: "Burglar Alarm System" },
                        { id: "access", label: "Access Control / Smart Locks" },
                        { id: "monitoring", label: "24/7 Monitoring Service" },
                        { id: "smart", label: "Smart Home Integration" },
                        { id: "other", label: "Other Security Services" }
                      ].map((service) => (
                        <div key={service.id} className="flex items-center space-x-2">
                          <Checkbox id={service.id} />
                          <Label htmlFor={service.id} className="text-sm font-normal">
                            {service.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="requirements">Additional Requirements</Label>
                    <Textarea 
                      id="requirements" 
                      placeholder="Tell us about any specific security concerns or requirements..."
                      className="min-h-[100px]"
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-2">
                      <Checkbox id="consent" />
                      <Label htmlFor="consent" className="text-sm leading-5">
                        I consent to SecuritySuperMarket and its partner providers contacting me 
                        about my security requirements. I understand I can opt out at any time. *
                      </Label>
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <Checkbox id="marketing" />
                      <Label htmlFor="marketing" className="text-sm leading-5">
                        I would like to receive security tips and special offers by email (optional)
                      </Label>
                    </div>
                  </div>

                  <Button variant="cta" size="lg" className="w-full">
                    Get My Free Security Quotes
                    <Shield className="w-5 h-5 ml-2" />
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our Privacy Policy and Terms of Service.
                    We are GDPR compliant and will never share your data with third parties without consent.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Trust Indicators */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4">Why Choose Our Service?</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span>100% Free, No Hidden Costs</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span>SIA Registered Providers Only</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span>No Spam or Cold Calls</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span>GDPR Compliant Service</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span>2-Minute Quote Form</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Popular Services */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4">Popular Home Security</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <Camera className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-medium text-sm">CCTV Systems</div>
                        <div className="text-xs text-muted-foreground">From £299</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <Bell className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-medium text-sm">Burglar Alarms</div>
                        <div className="text-xs text-muted-foreground">From £199</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <KeyRound className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-medium text-sm">Smart Locks</div>
                        <div className="text-xs text-muted-foreground">From £149</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Domestic;