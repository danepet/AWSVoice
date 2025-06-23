import React from 'react';
import { branding } from '../config/branding';

const Hero = () => {
  return (
    <section className="pt-20 bg-[#E5F5F5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="text-sm text-gray-600 mb-2">what we do - solutions</div>
            <h1 className="text-4xl md:text-5xl font-bold text-neura-navy mb-4">
              {branding.tagline}
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              {branding.description}
            </p>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-neura-navy rounded-lg overflow-hidden shadow-xl">
              <iframe 
                width="560" 
                height="315" 
                alt={`${branding.name} Demo`}
                className="w-full h-64 object-cover" 
                src={branding.videoUrl}
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;