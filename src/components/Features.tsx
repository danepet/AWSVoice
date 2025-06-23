import React from 'react';
import { Mic, Lock, PieChart, MessageSquare, Zap, Headphones } from 'lucide-react';
import { branding } from '../config/branding';

const features = [
  {
    icon: <Mic size={24} />,
    title: 'Natural Voice Interactions',
    description: 'Engage customers with human-like conversations.'
  },
  {
    icon: <Lock size={24} />,
    title: 'Enterprise-Grade Security',
    description: 'Industry-leading security standards.'
  },
  {
    icon: <PieChart size={24} />,
    title: 'Advanced Analytics',
    description: 'Detailed conversation metrics and insights.'
  },
  {
    icon: <MessageSquare size={24} />,
    title: 'Multi-Language Support',
    description: 'Connect with customers globally.'
  },
  {
    icon: <Zap size={24} />,
    title: 'Lightning-Fast Responses',
    description: 'Real-time AI-powered assistance.'
  },
  {
    icon: <Headphones size={24} />,
    title: 'Omnichannel Support',
    description: 'Consistent experiences across channels.'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            {branding.name} Features
          </h2>
          <p className="text-gray-600">
            Power your customer interactions with AI-driven voice technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 bg-white rounded-lg hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-neura-teal mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-neura-teal rounded-xl p-8 text-white max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Ready to get started with {branding.name}?
              </h3>
              <p className="text-white/90">
                Our experts are waiting for you.
              </p>
            </div>
            <img 
              src="https://images.pexels.com/photos/8728560/pexels-photo-8728560.jpeg" 
              alt="Get Started" 
              className="w-32 h-32 object-cover rounded-lg"
            />
            <a 
              href={branding.contactUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-neura-teal px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;