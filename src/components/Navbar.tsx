import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { branding } from '../config/branding';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <img 
              src={branding.logoPath}
              alt={branding.company}
              className="h-8"
            />
          </div>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a 
              href="/" 
              className="px-3 py-2 text-gray-700 hover:text-gray-900"
            >
              Home
            </a>
            
            <a 
              href={`${branding.companyWebsite}/what-we-do`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 text-gray-700 hover:text-gray-900"
            >
              What We Do
            </a>
            
            <a 
              href={`${branding.companyWebsite}/industries`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 text-gray-700 hover:text-gray-900"
            >
              Who We Serve
            </a>
            
            <a 
              href={`${branding.companyWebsite}/our-company/about-us`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 text-gray-700 hover:text-gray-900"
            >
              Our Company
            </a>
            
            <a 
              href={`${branding.companyWebsite}/resources`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 text-gray-700 hover:text-gray-900"
            >
              Resources
            </a>
            
            <a 
              href={`${branding.companyWebsite}/join-our-team/careers`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 text-gray-700 hover:text-gray-900"
            >
              Join Our Team
            </a>
            
            <a 
              href={branding.contactUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neura-teal text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t py-4">
            <div className="space-y-4">
              <a 
                href="/" 
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
              >
                Home
              </a>
              <a 
                href={`${branding.companyWebsite}/what-we-do`}
                target="_blank"
                rel="noopener noreferrer" 
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
              >
                What We Do
              </a>
              <a 
                href={`${branding.companyWebsite}/industries`}
                target="_blank"
                rel="noopener noreferrer" 
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
              >
                Who We Serve
              </a>
              <a 
                href={`${branding.companyWebsite}/our-company/about-us`}
                target="_blank"
                rel="noopener noreferrer" 
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
              >
                Our Company
              </a>
              <a 
                href={`${branding.companyWebsite}/resources`}
                target="_blank"
                rel="noopener noreferrer" 
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
              >
                Resources
              </a>
              <a 
                href={`${branding.companyWebsite}/join-our-team/careers`}
                target="_blank"
                rel="noopener noreferrer" 
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
              >
                Join Our Team
              </a>
              <a 
                href={branding.contactUrl}
                target="_blank"
                rel="noopener noreferrer" 
                className="block mx-4 bg-neura-teal text-white px-6 py-2 rounded-lg text-center"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;