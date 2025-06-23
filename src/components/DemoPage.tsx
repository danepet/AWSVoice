import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import DemoCard from './DemoCard';
import Logo from './Logo';
import { Demo } from '../data/demoData';
import { branding } from '../config/branding';

const DemoPage = () => {
  const [searchParams] = useSearchParams();
  const assistantId = searchParams.get('assistant-id');

  if (!assistantId) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-neura-navy to-[#1a237e] flex items-center justify-center px-4">
        <div className="text-center text-white">
          <h1 className="text-2xl font-bold mb-4">Invalid Demo Link</h1>
          <p>This demo link appears to be invalid or expired.</p>
        </div>
      </div>
    );
  }

  // Create a demo object for the single assistant
  const singleDemo: Demo = {
    id: 'single-demo',
    name: 'AI Voice Assistant',
    industry: 'Technology',
    industryGroup: 'technology',
    description: 'Experience the future of voice AI with our interactive demo.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
    assistantId: assistantId
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-neura-navy to-[#1a237e] flex flex-col">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-neura-teal opacity-5 blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-[40rem] h-[40rem] rounded-full bg-neura-blue opacity-5 blur-3xl"></div>
      </div>

      <header className="relative p-6 bg-white/5 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-block">
            <Logo />
          </Link>
        </div>
      </header>
      
      <main className="flex-grow flex items-center justify-center p-4 relative">
        <div className="max-w-xl w-full">
          <h1 className="text-4xl font-bold text-white text-center mb-8">
            Experience Voice AI
          </h1>
          <DemoCard demo={singleDemo} />
        </div>
      </main>

      <footer className="relative py-8 text-center">
        <a 
          href={branding.contactUrl}
          target="_blank"
          rel="noopener noreferrer" 
          className="inline-block text-white/80 hover:text-white transition-colors"
        >
          Ready to transform your business?
        </a>
      </footer>
    </div>
  );
};

export default DemoPage;