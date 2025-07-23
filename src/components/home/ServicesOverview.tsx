import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Camera, Shield, KeyRound, UserCheck, Bell, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesOverview = () => {
  const domesticServices = [
    {
      icon: <Camera className="w-6 h-6" />,
      title: "CCTV Systems",
      description: "HD security cameras with remote monitoring and smartphone alerts.",
      price: "From £299",
      popular: true
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Burglar Alarms",
      description: "24/7 monitored alarm systems with instant emergency response.",
      price: "From £199",
      popular: false
    },
    {
      icon: <KeyRound className="w-6 h-6" />,
      title: "Access Control",
      description: "Smart locks, keypads, and intercom systems for enhanced security.",
      price: "From £149",
      popular: false
    }
  ];

  const commercialServices = [
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Security Guards",
      description: "Professional SIA-licensed security personnel for your business.",
      price: "From £12/hour",
      popular: true
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Commercial CCTV",
      description: "Enterprise-grade surveillance systems with analytics.",
      price: "From £899",
      popular: false
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Fire & Safety",
      description: "Comprehensive fire detection and safety systems.",
      price: "From £399",
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Complete Security Solutions for Every Need
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From home security systems to commercial protection, we connect you with specialists 
            who provide tailored solutions at competitive prices.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Domestic Services */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-primary rounded-lg p-2">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Home Security</h3>
                <p className="text-muted-foreground">Protect your family and property</p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {domesticServices.map((service, index) => {
                const serviceLinks = ['cctv-systems', 'burglar-alarms', 'access-control'];
                return (
                  <Card key={index} className={`hover:shadow-medium transition-shadow ${service.popular ? 'ring-2 ring-primary' : ''}`}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <div className="text-primary">{service.icon}</div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-semibold text-foreground">{service.title}</h4>
                            {service.popular && (
                              <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                                Popular
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">{service.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-primary">{service.price}</span>
                            <Button variant="ghost" size="sm" asChild>
                              <Link to={`/services/${serviceLinks[index]}`}>
                                Learn More <ArrowRight className="w-4 h-4 ml-1" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Button variant="cta" size="lg" className="w-full" asChild>
              <Link to="/domestic">
                Get Home Security Quotes
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Commercial Services */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-secondary rounded-lg p-2">
                <UserCheck className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Business Security</h3>
                <p className="text-muted-foreground">Comprehensive commercial protection</p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {commercialServices.map((service, index) => {
                const serviceLinks = ['security-guards', 'commercial-cctv', 'fire-safety'];
                return (
                  <Card key={index} className={`hover:shadow-medium transition-shadow ${service.popular ? 'ring-2 ring-secondary' : ''}`}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-secondary/10 p-3 rounded-lg">
                          <div className="text-secondary">{service.icon}</div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-semibold text-foreground">{service.title}</h4>
                            {service.popular && (
                              <span className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full">
                                Popular
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">{service.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-secondary">{service.price}</span>
                            <Button variant="ghost" size="sm" asChild>
                              <Link to={`/services/${serviceLinks[index]}`}>
                                Learn More <ArrowRight className="w-4 h-4 ml-1" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Button variant="secondary" size="lg" className="w-full" asChild>
              <Link to="/commercial">
                Get Business Security Quotes
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;