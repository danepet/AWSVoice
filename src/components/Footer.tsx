import React from 'react';
import { Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';
import { branding } from '../config/branding';

const Footer = () => {
  return (
    <footer className="bg-neura-navy text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Left Section */}
          <div className="lg:col-span-2">
            <img 
              src={branding.logoWhitePath}
              alt={branding.company}
              className="h-8 mb-6"
            />
            <p className="text-gray-300 mb-8">
              Build AI-Powered Experiences, <br />
              Across Any Cloud or Industry.
            </p>
            <div className="flex space-x-4">
              <a href={`${branding.companyWebsite.replace('https://www.', 'https://www.linkedin.com/company/')}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Linkedin size={20} />
              </a>
              <a href={`${branding.companyWebsite.replace('https://www.', 'https://twitter.com/')}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href={`${branding.companyWebsite.replace('https://www.', 'https://www.instagram.com/')}/`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href={`${branding.companyWebsite.replace('https://www.', 'https://www.youtube.com/c/')}Official`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Right Section - Navigation Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-5 gap-8">
            {/* What We Do */}
            <div>
              <h3 className="font-semibold mb-4">
                <a href={`${branding.companyWebsite}/what-we-do`} className="hover:text-gray-300">What We Do</a>
              </h3>
              <div className="space-y-3">
                <a href={`${branding.companyWebsite}/our-services`} className="block text-sm text-gray-400 hover:text-white">Our Services</a>
                <a href={`${branding.companyWebsite}/salesforce-solutions`} className="block text-sm text-gray-400 hover:text-white">Salesforce Solutions</a>
                <a href={`${branding.companyWebsite}/amazon-solutions`} className="block text-sm text-gray-400 hover:text-white">Amazon Solutions</a>
                <a href={`${branding.companyWebsite}/clm-solutions`} className="block text-sm text-gray-400 hover:text-white">DocuSign Solutions</a>
                <a href={`${branding.companyWebsite}/neuraflash-products`} className="block text-sm text-gray-400 hover:text-white">{branding.company} Products</a>
              </div>
            </div>

            {/* Who We Serve */}
            <div>
              <h3 className="font-semibold mb-4">
                <a href={`${branding.companyWebsite}/industries`} className="hover:text-gray-300">Who We Serve</a>
              </h3>
              <div className="space-y-3">
                <a href={`${branding.companyWebsite}/industries`} className="block text-sm text-gray-400 hover:text-white">Industries</a>
              </div>
            </div>

            {/* Our Company */}
            <div>
              <h3 className="font-semibold mb-4">
                <a href={`${branding.companyWebsite}/our-company/about-us`} className="hover:text-gray-300">Our Company</a>
              </h3>
              <div className="space-y-3">
                <a href={`${branding.companyWebsite}/our-company/about-us`} className="block text-sm text-gray-400 hover:text-white">About Us</a>
                <a href={`${branding.companyWebsite}/company-news/announcements`} className="block text-sm text-gray-400 hover:text-white">Announcements</a>
                <a href={`${branding.companyWebsite}/our-company/partners`} className="block text-sm text-gray-400 hover:text-white">Partners</a>
                <a href={`${branding.companyWebsite}/privacy-policy`} className="block text-sm text-gray-400 hover:text-white">Privacy Policy</a>
                <a href={`${branding.companyWebsite}/terms-of-service`} className="block text-sm text-gray-400 hover:text-white">Terms of Service</a>
              </div>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold mb-4">
                <a href={`${branding.companyWebsite}/content/blog`} className="hover:text-gray-300">Resources</a>
              </h3>
              <div className="space-y-3">
                <a href={`${branding.companyWebsite}/content/resource-hub`} className="block text-sm text-gray-400 hover:text-white">Resource Hub</a>
                <a href={`${branding.companyWebsite}/content/blog`} className="block text-sm text-gray-400 hover:text-white">Blog</a>
                <a href={`${branding.companyWebsite}/content/customer-stories`} className="block text-sm text-gray-400 hover:text-white">Customer Stories</a>
                <a href={`${branding.companyWebsite}/content/video-hub`} className="block text-sm text-gray-400 hover:text-white">Video Hub</a>
                <a href={`${branding.companyWebsite}/content/events`} className="block text-sm text-gray-400 hover:text-white">Events & Webinars</a>
              </div>
            </div>

            {/* Join Our Team */}
            <div>
              <h3 className="font-semibold mb-4">
                <a href={`${branding.companyWebsite}/join-our-team/careers`} className="hover:text-gray-300">Join Our Team</a>
              </h3>
              <div className="space-y-3">
                <a href={`${branding.companyWebsite}/join-our-team/careers`} className="block text-sm text-gray-400 hover:text-white">Careers</a>
                <a href={`${branding.companyWebsite}/join-our-team/jobs`} className="block text-sm text-gray-400 hover:text-white">Job Board</a>
                <a href={`${branding.companyWebsite}/join-our-team/neuraflash-india`} className="block text-sm text-gray-400 hover:text-white">{branding.company} India</a>
                <a href={`${branding.companyWebsite}/join-our-team/latam`} className="block text-sm text-gray-400 hover:text-white">{branding.company} LATAM</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <p className="text-sm text-gray-400">
            All Rights Reserved. © {branding.company}, 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;