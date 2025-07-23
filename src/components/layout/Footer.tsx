import { Link } from "react-router-dom";
import { Shield, Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary rounded-lg p-2">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold">SecuritySuperMarket</h3>
                <p className="text-sm opacity-90">Trusted Security Solutions</p>
              </div>
            </div>
            <p className="text-sm opacity-80 mb-4">
              Connecting UK homes and businesses with SIA-registered security providers since 2024. 
              Get free, no-obligation quotes from trusted professionals.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                <Facebook className="w-4 h-4 text-primary-foreground" />
              </a>
              <a href="#" className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                <Twitter className="w-4 h-4 text-primary-foreground" />
              </a>
              <a href="#" className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                <Linkedin className="w-4 h-4 text-primary-foreground" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Security Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/domestic" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">Home Security</Link></li>
              <li><Link to="/commercial" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">Business Security</Link></li>
              <li><Link to="/services/cctv" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">CCTV Systems</Link></li>
              <li><Link to="/services/alarms" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">Burglar Alarms</Link></li>
              <li><Link to="/services/access-control" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">Access Control</Link></li>
              <li><Link to="/services/security-guards" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">Security Guards</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/blog" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">Security Blog</Link></li>
              <li><Link to="/recommendation-club" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">Recommendation Club</Link></li>
              <li><Link to="/affinity" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">Affinity Partners</Link></li>
              <li><Link to="/privacy" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span>0800 123 4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@securitysupermarket.org</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <span>London, United Kingdom<br />Serving all UK locations</span>
              </div>
            </div>
            
            <div className="mt-6 p-3 bg-success/10 rounded-lg border border-success/20">
              <p className="text-xs text-success font-medium">SIA Licensed & ACS Approved</p>
              <p className="text-xs opacity-80 mt-1">All our partner providers are fully certified</p>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm opacity-80">
              © 2024 SecuritySuperMarket.org. All rights reserved. | Website by Lovable
            </div>
            <div className="flex gap-6 text-xs">
              <Link to="/privacy" className="opacity-80 hover:opacity-100 transition-opacity">Privacy Policy</Link>
              <span className="opacity-80">Terms & Conditions</span>
              <span className="opacity-80">Cookie Policy</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;