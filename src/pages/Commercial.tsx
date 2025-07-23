import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Building, UserCheck, Camera, Shield, Lock, CheckCircle } from "lucide-react";

const Commercial = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary/10 via-background to-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Building className="w-4 h-4" />
              Commercial Security Solutions
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Comprehensive Business Security Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Protect your business with professional security services. Get quotes for security guards, 
              CCTV systems, access control, and comprehensive commercial protection packages.
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
                    <Shield className="w-6 h-6 text-secondary" />
                    Get Your Free Business Security Quote
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Tell us about your business security requirements and receive tailored quotes 
                    from vetted commercial security specialists.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contactName">Contact Name *</Label>
                      <Input id="contactName" placeholder="Enter your full name" />
                    </div>
                    <div>
                      <Label htmlFor="jobTitle">Job Title *</Label>
                      <Input id="jobTitle" placeholder="e.g. Facilities Manager" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="companyName">Company Name *</Label>
                    <Input id="companyName" placeholder="Enter your company name" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="business.email@company.com" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" type="tel" placeholder="020 7946 0958" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="businessAddress">Business Address *</Label>
                    <Input id="businessAddress" placeholder="Enter your business address" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="postcode">Postcode *</Label>
                      <Input id="postcode" placeholder="EC1A 1BB" />
                    </div>
                    <div>
                      <Label htmlFor="businessType">Business Type *</Label>
                      <select className="w-full h-10 px-3 rounded-md border border-input bg-background">
                        <option value="">Select business type</option>
                        <option value="office">Office Building</option>
                        <option value="retail">Retail Store</option>
                        <option value="warehouse">Warehouse/Distribution</option>
                        <option value="manufacturing">Manufacturing</option>
                        <option value="healthcare">Healthcare Facility</option>
                        <option value="education">Educational Institution</option>
                        <option value="hospitality">Hotel/Restaurant</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="employees">Number of Employees</Label>
                      <select className="w-full h-10 px-3 rounded-md border border-input bg-background">
                        <option value="">Select range</option>
                        <option value="1-10">1-10 employees</option>
                        <option value="11-50">11-50 employees</option>
                        <option value="51-200">51-200 employees</option>
                        <option value="201-1000">201-1000 employees</option>
                        <option value="1000+">1000+ employees</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="timeframe">Required Timeframe</Label>
                      <select className="w-full h-10 px-3 rounded-md border border-input bg-background">
                        <option value="">Select timeframe</option>
                        <option value="immediate">Immediate (Within 1 week)</option>
                        <option value="month">Within 1 month</option>
                        <option value="quarter">Within 3 months</option>
                        <option value="planning">Just planning ahead</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label className="text-base font-medium mb-3 block">
                      What security services do you need? *
                    </Label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        { id: "guards", label: "Security Guards / Manned Guarding" },
                        { id: "cctv", label: "Commercial CCTV Systems" },
                        { id: "access", label: "Access Control Systems" },
                        { id: "alarms", label: "Intruder Alarm Systems" },
                        { id: "fire", label: "Fire Detection & Safety" },
                        { id: "patrols", label: "Mobile Security Patrols" },
                        { id: "monitoring", label: "24/7 Monitoring Service" },
                        { id: "consultation", label: "Security Risk Assessment" }
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
                    <Label htmlFor="requirements">Detailed Requirements</Label>
                    <Textarea 
                      id="requirements" 
                      placeholder="Please describe your security challenges, specific requirements, budget range, and any other relevant details..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-2">
                      <Checkbox id="consent" />
                      <Label htmlFor="consent" className="text-sm leading-5">
                        I consent to SecuritySuperMarket and its partner providers contacting me 
                        about my business security requirements. I understand I can opt out at any time. *
                      </Label>
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <Checkbox id="marketing" />
                      <Label htmlFor="marketing" className="text-sm leading-5">
                        I would like to receive security industry insights and special offers by email (optional)
                      </Label>
                    </div>
                  </div>

                  <Button variant="secondary" size="lg" className="w-full">
                    Get My Free Business Security Quotes
                    <Building className="w-5 h-5 ml-2" />
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
                  <h3 className="font-semibold text-foreground mb-4">Why Businesses Choose Us</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span>SIA Licensed Professionals</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span>Fully Insured Providers</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span>Competitive Pricing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span>24/7 Emergency Response</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span>Tailored Security Solutions</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Popular Business Services */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4">Popular Business Security</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <UserCheck className="w-5 h-5 text-secondary" />
                      <div>
                        <div className="font-medium text-sm">Security Guards</div>
                        <div className="text-xs text-muted-foreground">From £12/hour</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <Camera className="w-5 h-5 text-secondary" />
                      <div>
                        <div className="font-medium text-sm">Commercial CCTV</div>
                        <div className="text-xs text-muted-foreground">From £899</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <Lock className="w-5 h-5 text-secondary" />
                      <div>
                        <div className="font-medium text-sm">Access Control</div>
                        <div className="text-xs text-muted-foreground">From £599</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4">Need to Speak to Someone?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our business security specialists are available to discuss your requirements.
                  </p>
                  <Button variant="outline" className="w-full mb-3">
                    Call 0800 123 4567
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Monday - Friday: 8am - 6pm<br />
                    Saturday: 9am - 4pm
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Commercial;