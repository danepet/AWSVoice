import React, { useState } from 'react';
import { Mic, MicOff, Volume2, Loader2, HardHat, Wrench, Box, Car, Gauge, Zap, Building2, FileText, ShieldCheck, Wallet, BadgeCheck, Store, HeartPulse, FlaskRound as Flask, Stethoscope, Briefcase, Construction, Home, Cpu, Radio, Phone, Users } from 'lucide-react';
import { useVapi } from '../context/VapiContext';
import { Demo } from '../data/demoData';

interface DemoCardProps {
  demo: Demo;
}

const DemoCard = ({ demo }: DemoCardProps) => {
  const { startDemo, stopDemo, isCallActive, isSpeaking, currentCall } = useVapi();
  const [isLoading, setIsLoading] = useState(false);
  const isActive = isCallActive && currentCall === demo.name;

  const getIcon = () => {
    const iconProps = { size: 24, className: "text-[#00A7B1]" };
    
    // Map demo IDs to appropriate icons
    const iconMap: { [key: string]: React.ReactNode } = {
      // Manufacturing
      'mfg-1': <HardHat {...iconProps} />,
      'mfg-2': <Wrench {...iconProps} />,
      'mfg-3': <Box {...iconProps} />,
      
      // Automotive
      'auto-1': <Car {...iconProps} />,
      'auto-2': <Car {...iconProps} />,
      'auto-3': <Gauge {...iconProps} />,
      
      // Energy
      'energy-1': <Zap {...iconProps} />,
      'energy-2': <Zap {...iconProps} />,
      'energy-3': <Zap {...iconProps} />,
      
      // Banking
      'bank-1': <Building2 {...iconProps} />,
      'bank-2': <FileText {...iconProps} />,
      'bank-3': <ShieldCheck {...iconProps} />,
      
      // Insurance
      'ins-1': <ShieldCheck {...iconProps} />,
      'ins-2': <FileText {...iconProps} />,
      'ins-3': <ShieldCheck {...iconProps} />,
      
      // Fintech
      'fin-1': <Wallet {...iconProps} />,
      'fin-2': <Wallet {...iconProps} />,
      'fin-3': <BadgeCheck {...iconProps} />,
      
      // Retail
      'retail-1': <Store {...iconProps} />,
      'retail-2': <Box {...iconProps} />,
      'retail-3': <BadgeCheck {...iconProps} />,
      
      // Healthcare
      'health-1': <HeartPulse {...iconProps} />,
      'health-2': <HeartPulse {...iconProps} />,
      'health-3': <HeartPulse {...iconProps} />,
      
      // Pharma
      'pharma-1': <Flask {...iconProps} />,
      'pharma-2': <Flask {...iconProps} />,
      'pharma-3': <Flask {...iconProps} />,
      
      // MedTech
      'medtech-1': <Stethoscope {...iconProps} />,
      'medtech-2': <Stethoscope {...iconProps} />,
      'medtech-3': <Stethoscope {...iconProps} />,
      
      // Business Services
      'business-services-1': <Briefcase {...iconProps} />,
      'business-services-2': <Briefcase {...iconProps} />,
      'business-services-3': <Briefcase {...iconProps} />,
      
      // Construction
      'construction-1': <Construction {...iconProps} />,
      'construction-2': <Construction {...iconProps} />,
      'construction-3': <Construction {...iconProps} />,
      
      // Real Estate
      'real-estate-1': <Home {...iconProps} />,
      'real-estate-2': <Home {...iconProps} />,
      'real-estate-3': <Home {...iconProps} />,
      
      // Technology
      'technology-1': <Cpu {...iconProps} />,
      'technology-2': <Cpu {...iconProps} />,
      'technology-3': <Cpu {...iconProps} />,
      
      // Media
      'media-1': <Radio {...iconProps} />,
      'media-2': <Radio {...iconProps} />,
      'media-3': <Radio {...iconProps} />,
      
      // Telecom
      'telecom-1': <Phone {...iconProps} />,
      'telecom-2': <Phone {...iconProps} />,
      'telecom-3': <Phone {...iconProps} />,
      
      // Public Sector
      'public-sector-1': <Users {...iconProps} />,
      'public-sector-2': <Users {...iconProps} />,
      'public-sector-3': <Users {...iconProps} />
    };

    return iconMap[demo.id] || <Mic {...iconProps} />;
  };

  const handleStart = async () => {
    if (isActive) {
      stopDemo();
    } else {
      setIsLoading(true);
      try {
        await startDemo(demo.assistantId, demo.name);
      } catch (error) {
        console.error('Error starting demo:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className={`flex flex-col h-full bg-[#F4FEFF] rounded-lg overflow-hidden ${
      isActive ? 'ring-2 ring-[#00A7B1] shadow-lg' : 'hover:shadow-lg'
    }`}>
      <div className="p-6 flex-grow">
        <div className="mb-4">
          {getIcon()}
        </div>
        <h3 className="text-lg font-semibold text-neura-navy mb-2">{demo.name}</h3>
        <p className="text-gray-600 text-sm">{demo.description}</p>
      </div>
      
      <div className="p-6 bg-white/50 border-t">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {isActive && (
              <>
                <span className="flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-[#00A7B1] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00A7B1]"></span>
                </span>
                <span className="text-sm text-[#00A7B1]">Active Chat</span>
                {isSpeaking && <Volume2 size={16} className="text-[#00A7B1] animate-pulse" />}
              </>
            )}
            {isLoading && (
              <div className="flex items-center gap-2 text-[#00A7B1]">
                <Loader2 size={16} className="animate-spin" />
                <span className="text-sm">Starting chat...</span>
              </div>
            )}
          </div>
          
          <button
            onClick={handleStart}
            disabled={isLoading}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              isActive 
                ? 'bg-red-500 text-white hover:bg-red-600' 
                : 'bg-[#00A7B1] text-white hover:bg-[#008F98]'
            } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isActive ? (
              <>
                <span>Stop</span>
                <MicOff size={18} />
              </>
            ) : isLoading ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                <span>Starting...</span>
              </>
            ) : (
              <>
                <span>Try it out</span>
                <Mic size={18} />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DemoCard;