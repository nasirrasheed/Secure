import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, Shield, KeyRound, UserCheck, Bell, Lock, ArrowRight, CheckCircle, Phone, Mail } from "lucide-react";
import { useParams, Link } from "react-router-dom";
import SecurityAnalysis from "@/components/ai/SecurityAnalysis";

const Services = () => {
  const { serviceType } = useParams();

  const serviceDetails = {
    'cctv-systems': {
      title: 'CCTV Security Systems',
      icon: <Camera className="w-8 h-8" />,
      description: 'Professional HD security camera systems with remote monitoring and smartphone alerts.',
      price: 'From £299',
      features: [
        '4K Ultra HD Resolution',
        '24/7 Remote Monitoring',
        'Smartphone App Control',
        'Motion Detection Alerts',
        'Night Vision Technology',
        'Cloud Storage Options',
        'Professional Installation',
        '2-Year Warranty'
      ],
      benefits: [
        'Deterrent against burglars and vandals',
        'Remote monitoring of your property',
        'Evidence collection for insurance claims',
        'Peace of mind when away from home'
      ]
    },
    'burglar-alarms': {
      title: 'Burglar Alarm Systems',
      icon: <Bell className="w-8 h-8" />,
      description: '24/7 monitored alarm systems with instant emergency response.',
      price: 'From £199',
      features: [
        'Wireless Technology',
        '24/7 Monitoring Center',
        'Instant Police Response',
        'Mobile App Control',
        'Pet-Friendly Sensors',
        'Backup Battery System',
        'Professional Installation',
        'Annual Maintenance'
      ],
      benefits: [
        'Immediate response to break-ins',
        'Lower insurance premiums',
        'Protection even when power is out',
        'Easy to arm and disarm remotely'
      ]
    },
    'access-control': {
      title: 'Access Control Systems',
      icon: <KeyRound className="w-8 h-8" />,
      description: 'Smart locks, keypads, and intercom systems for enhanced security.',
      price: 'From £149',
      features: [
        'Smart Lock Technology',
        'Keypad Entry Systems',
        'Video Intercom',
        'Remote Access Control',
        'Multiple User Codes',
        'Audit Trail Logging',
        'Battery Backup',
        'Weather Resistant'
      ],
      benefits: [
        'No more lost or stolen keys',
        'Control who enters and when',
        'Temporary access for visitors',
        'Track entry and exit times'
      ]
    },
    'security-guards': {
      title: 'Security Guard Services',
      icon: <UserCheck className="w-8 h-8" />,
      description: 'Professional SIA-licensed security personnel for your business.',
      price: 'From £12/hour',
      features: [
        'SIA Licensed Guards',
        'Uniformed Personnel',
        'Mobile Patrol Services',
        'Static Guarding',
        'Event Security',
        'Keyholding Services',
        'Incident Reporting',
        '24/7 Availability'
      ],
      benefits: [
        'Visible deterrent to criminals',
        'Professional incident handling',
        'Customer service representation',
        'Emergency response capability'
      ]
    },
    'commercial-cctv': {
      title: 'Commercial CCTV Systems',
      icon: <Shield className="w-8 h-8" />,
      description: 'Enterprise-grade surveillance systems with analytics.',
      price: 'From £899',
      features: [
        'AI-Powered Analytics',
        'Facial Recognition',
        'License Plate Reading',
        'People Counting',
        'Perimeter Protection',
        'Central Monitoring',
        'Scalable System',
        'Integration Ready'
      ],
      benefits: [
        'Advanced threat detection',
        'Business intelligence insights',
        'Reduced security costs',
        'Compliance documentation'
      ]
    },
    'fire-safety': {
      title: 'Fire & Safety Systems',
      icon: <Lock className="w-8 h-8" />,
      description: 'Comprehensive fire detection and safety systems.',
      price: 'From £399',
      features: [
        'Smoke Detection',
        'Heat Sensors',
        'Emergency Lighting',
        'Fire Alarm Panel',
        'Sprinkler Integration',
        'Emergency Communications',
        'Regular Testing',
        'Compliance Certification'
      ],
      benefits: [
        'Early fire detection',
        'Life safety protection',
        'Property damage prevention',
        'Regulatory compliance'
      ]
    }
  };

  const service = serviceDetails[serviceType as keyof typeof serviceDetails];

  if (!service) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Service Not Found</h1>
            <Link to="/">
              <Button>Return Home</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-subtle py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-primary/10 p-4 rounded-2xl">
                <div className="text-primary">{service.icon}</div>
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {service.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                {service.price}
              </Badge>
              <Button size="lg" variant="cta">
                Get Free Quote <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Key Features</h2>
              <div className="space-y-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Benefits</h2>
              <div className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <Card key={index} className="p-4">
                    <p className="text-foreground">{benefit}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Security Analysis */}
      {(serviceType === 'cctv-systems' || serviceType === 'commercial-cctv') && (
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <SecurityAnalysis serviceType="cctv" />
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Ready to Secure Your Property?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get connected with vetted security providers in your area. Free quotes, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="cta">
              <Phone className="w-5 h-5 mr-2" />
              Call Now: 0800 123 4567
            </Button>
            <Button size="lg" variant="outline">
              <Mail className="w-5 h-5 mr-2" />
              Email Quote Request
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;