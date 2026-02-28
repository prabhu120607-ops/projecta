import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Dumbbell } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group inline-block">
              <Dumbbell className="h-8 w-8 text-primary" />
              <span className="font-display text-2xl font-bold tracking-wider text-white">
                FITLIFE <span className="text-primary">GUNTUR</span>
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Transform your body and life with the best fitness center in Lakshmipuram. Premium equipment, expert trainers, and a supportive community.
            </p>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['About Us', 'Services', 'Membership Plans', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-primary"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xl font-bold mb-6">Working Hours</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Monday - Saturday</span>
                <span className="text-white">5:00 AM - 12:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Monday - Saturday</span>
                <span className="text-white">4:00 PM - 10:00 PM</span>
              </li>
              <li className="flex justify-between text-primary font-medium pt-2">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xl font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <MapPin className="h-6 w-6 text-primary shrink-0" />
                <span className="text-gray-400">3rd Floor, Pheonix Padmavathi, 4th Lane, Lakshmipuram, Guntur, AP 522007 (PUMA Store Building)</span>
              </li>
              <li className="flex gap-4 items-center">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span className="text-gray-400">+91 98765 43210</span>
              </li>
              <li className="flex gap-4 items-center">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span className="text-gray-400">join@fitlifeguntur.com</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Fitlife Gym Guntur. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
