import { Heart, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">VistaMedAid</span>
            </div>
            <p className="text-white/80 leading-relaxed mb-6 max-w-md">
              Bridging the healthcare gap in rural areas through innovative technology 
              solutions that make medical care accessible, affordable, and reliable.
            </p>
            <div className="text-white/60 text-sm">
              Healthcare for All • Technology for Good
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-3 text-white/80">
              <li className="hover:text-white cursor-pointer transition-colors">Telemedicine</li>
              <li className="hover:text-white cursor-pointer transition-colors">IoT Monitoring</li>
              <li className="hover:text-white cursor-pointer transition-colors">AI Analytics</li>
              <li className="hover:text-white cursor-pointer transition-colors">Drone Delivery</li>
              <li className="hover:text-white cursor-pointer transition-colors">Health Records</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
          <p>&copy; 2024 VistaMedAid. All rights reserved. Built with ❤️ for rural communities.</p>
        </div>
      </div>
    </footer>
  );
};