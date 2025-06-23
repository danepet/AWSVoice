import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import Vapi from '@vapi-ai/web';

interface VapiContextType {
  vapi: Vapi | null;
  isCallActive: boolean;
  isSpeaking: boolean;
  currentCall: string | null;
  startDemo: (assistantId: string, name: string) => Promise<void>;
  stopDemo: () => void;
}

const VapiContext = createContext<VapiContextType | undefined>(undefined);

interface VapiProviderProps {
  children: ReactNode;
}

export const VapiProvider = ({ children }: VapiProviderProps) => {
  const [vapi, setVapi] = useState<Vapi | null>(null);
  const [isCallActive, setIsCallActive] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentCall, setCurrentCall] = useState<string | null>(null);

  useEffect(() => {
    const vapiInstance = new Vapi('1f09a852-6024-457c-8853-5288589ea1e9');
    
    vapiInstance.on('call-start', () => {
      setIsCallActive(true);
    });
    
    vapiInstance.on('call-end', () => {
      setIsCallActive(false);
      setCurrentCall(null);
    });
    
    vapiInstance.on('speech-start', () => {
      setIsSpeaking(true);
    });
    
    vapiInstance.on('speech-end', () => {
      setIsSpeaking(false);
    });
    
    vapiInstance.on('error', (error) => {
      console.error('Vapi error:', error);
      setIsCallActive(false);
      setCurrentCall(null);
    });
    
    setVapi(vapiInstance);
    
    return () => {
      if (vapiInstance) {
        try {
          vapiInstance.stop();
        } catch (e) {
          console.error('Error stopping Vapi:', e);
        }
      }
    };
  }, []);

  const startDemo = async (assistantId: string, name: string) => {
    if (!vapi) return;
    
    try {
      await vapi.start(assistantId);
      setCurrentCall(name);
    } catch (error) {
      console.error('Error starting demo:', error);
    }
  };

  const stopDemo = () => {
    if (vapi && isCallActive) {
      try {
        vapi.stop();
      } catch (e) {
        console.error('Error stopping demo:', e);
      }
    }
  };

  return (
    <VapiContext.Provider
      value={{
        vapi,
        isCallActive,
        isSpeaking,
        currentCall,
        startDemo,
        stopDemo
      }}
    >
      {children}
    </VapiContext.Provider>
  );
};

export const useVapi = () => {
  const context = useContext(VapiContext);
  if (context === undefined) {
    throw new Error('useVapi must be used within a VapiProvider');
  }
  return context;
};