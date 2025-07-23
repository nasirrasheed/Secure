import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, Award, Clock, CheckCircle } from "lucide-react";

const About = () => {
  const stats = [
    { number: "10,000+", label: "Satisfied Customers" },
    { number: "500+", label: "Security Providers" },
    { number: "15+", label: "Years Experience" },
    { number: "24/7", label: "Customer Support" }
  ];

  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trust & Security",
      description: "All our security providers are fully vetted, SIA licensed, and insurance verified."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer First",
      description: "We prioritize your security needs and ensure you get the best solution for your budget."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Assured",
      description: "Only approved, high-quality security providers with proven track records."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Fast Response",
      description: "Quick quotes and rapid deployment of security solutions when you need them."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-subtle py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">About SecuritySuperMarket</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              The UK's Leading Security Service Marketplace
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connecting homeowners and businesses with trusted, vetted security providers 
              across the UK since 2008. We make finding the right security solution simple, 
              fast, and affordable.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                SecuritySuperMarket was founded in 2008 with a simple mission: to make finding 
                reliable security services as easy as shopping online. Our founders, experienced 
                security professionals themselves, recognized the challenges customers faced when 
                trying to find trustworthy security providers.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Today, we've grown to become the UK's most trusted security service marketplace, 
                connecting thousands of customers with vetted security professionals every month. 
                From simple burglar alarms to comprehensive commercial security systems, we help 
                you find the right solution at the right price.
              </p>
              <p className="text-lg leading-relaxed">
                Our rigorous vetting process ensures that every security provider on our platform 
                meets the highest standards of professionalism, reliability, and customer service. 
                We're not just a directory – we're your trusted partner in securing what matters most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and every relationship we build.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-medium transition-shadow">
                <CardContent className="p-0">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-primary">{value.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Commitment
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're committed to maintaining the highest standards in everything we do.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Rigorous Vetting</h3>
                <p className="text-muted-foreground">Every provider is thoroughly checked for licenses, insurance, and customer feedback.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Transparent Pricing</h3>
                <p className="text-muted-foreground">No hidden fees, clear pricing, and competitive quotes from multiple providers.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Ongoing Support</h3>
                <p className="text-muted-foreground">We're here to help before, during, and after your security installation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;