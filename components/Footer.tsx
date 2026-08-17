import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-playfair font-bold text-white mb-2">
              Sinraila <span className="text-[#D4AF37] italic font-normal">Beauty Salon</span>
            </h2>
            <p className="text-gray-400 text-sm tracking-widest uppercase mb-6">
              Beauty Parlour &bull; Gular Naka, Banda
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Enhancing your natural beauty with professional services in a relaxing environment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium text-white mb-6">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#home" className="hover:text-[#D4AF37] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#D4AF37] transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-[#D4AF37] transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-[#D4AF37] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-medium text-white mb-6">Contact</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>
                  Maheswari Devi Mandir, Ramlila Maidan, <br />
                  Gular Naka, Banda, <br />
                  Uttar Pradesh 210001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <a href="tel:06394293474" className="hover:text-white transition-colors">063942 93474</a>
              </li>
              <li>
                <a 
                  href="https://maps.app.goo.gl/t6jfhDL91nCXkPhf9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#D4AF37] hover:text-white transition-colors mt-2"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Get Directions
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-medium text-white mb-6">Opening Hours</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex justify-between border-b border-gray-800 pb-2">
                <span>Sun &ndash; Fri</span>
                <span>11:30 AM &ndash; 8:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-gray-800 pb-2">
                <span>Saturday</span>
                <span>11:00 AM &ndash; 8:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; 2026 Sinraila Beauty Salon. All rights reserved.
          </p>
          <div className="text-gray-500 text-sm">
            Designed for local beauty.
          </div>
        </div>
      </div>
    </footer>
  );
}
