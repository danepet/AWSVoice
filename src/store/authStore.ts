import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Development password - only used in development mode
const DEV_PASSWORD = 'neuraflash';

// Hardcoded Supabase URLs
const SUPABASE_URL = 'https://ovfzbebcsvjfwgnyywpy.supabase.co';
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

interface AuthState {
  isAuthenticated: boolean;
  accessCode: string | null;
  email: string | null;
  requestAccessCode: (email: string) => Promise<{ isValid: boolean; message: string }>;
  validateAccessCode: (code: string) => Promise<boolean>;
  validateDevPassword: (password: string) => boolean;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      accessCode: null,
      email: null,
      requestAccessCode: async (email: string) => {
        try {
          const response = await fetch(
            `${SUPABASE_URL}/functions/v1/send-access-code`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
              },
              body: JSON.stringify({ email }),
            }
          );

          const data = await response.json();
          
          if (!response.ok) {
            return { 
              isValid: false, 
              message: data.error || 'Failed to send access code' 
            };
          }

          set({ email });
          return { 
            isValid: true, 
            message: 'Access code has been sent to your email.' 
          };
        } catch (error) {
          console.error('Error requesting access code:', error);
          return { 
            isValid: false, 
            message: 'Failed to send access code. Please try again.' 
          };
        }
      },
      validateAccessCode: async (code: string) => {
        try {
          const currentEmail = useAuthStore.getState().email;
          if (!currentEmail || !code) return false;

          const response = await fetch(
            `${SUPABASE_URL}/functions/v1/validate-access-code`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
              },
              body: JSON.stringify({ email: currentEmail, code }),
            }
          );

          if (!response.ok) return false;

          const { valid } = await response.json();
          
          if (valid) {
            set({ isAuthenticated: true, accessCode: code });
            return true;
          }

          return false;
        } catch (error) {
          console.error('Error in validateAccessCode:', error);
          return false;
        }
      },
      validateDevPassword: (password: string) => {
        if (import.meta.env.DEV && password === DEV_PASSWORD) {
          set({ isAuthenticated: true, accessCode: 'dev' });
          return true;
        }
        return false;
      },
      logout: () => set({ isAuthenticated: false, accessCode: null, email: null }),
    }),
    {
      name: 'auth-storage',
    }
  )
);