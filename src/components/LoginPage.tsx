import React, { useState } from 'react';
import { useAuthStore } from '../store/authStore';
import Logo from './Logo';
import { Mail, Loader2, Lock } from 'lucide-react';
import { branding } from '../config/branding';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [accessCode, setAccessCode] = useState('');
  const [devPassword, setDevPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [showCodeInput, setShowCodeInput] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const { requestAccessCode, validateAccessCode, validateDevPassword } = useAuthStore();

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setMessage('');
    
    try {
      const result = await requestAccessCode(email);
      if (result.isValid) {
        setShowCodeInput(true);
        setMessage(result.message);
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError('Failed to send access code. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCodeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const isValid = await validateAccessCode(accessCode);
      if (!isValid) {
        setError('Invalid or expired access code. Please try again.');
      }
    } catch (err) {
      setError('Failed to validate code. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDevPasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = validateDevPassword(devPassword);
    if (!isValid) {
      setError('Invalid development password');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-neura-navy to-[#1a237e] flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        <div className="flex justify-center mb-8">
          <Logo />
        </div>
        <h2 className="text-2xl font-bold text-neura-navy text-center mb-6">
          Welcome to {branding.name}
        </h2>
        
        {import.meta.env.DEV && (
          <form onSubmit={handleDevPasswordSubmit} className="mb-8 pb-8 border-b border-gray-200">
            <div className="space-y-4">
              <label htmlFor="devPassword" className="block text-sm font-medium text-gray-700">
                Development Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="devPassword"
                  value={devPassword}
                  onChange={(e) => setDevPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-neura-blue focus:border-transparent"
                  placeholder="Enter dev password"
                />
                <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <button
                type="submit"
                className="w-full bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors"
              >
                Access Dev Environment
              </button>
            </div>
          </form>
        )}
        
        {!showCodeInput ? (
          <form onSubmit={handleEmailSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Enter Your Work Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-neura-blue focus:border-transparent"
                  placeholder="name@company.com"
                  required
                  disabled={isLoading}
                />
                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-neura-blue text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors flex items-center justify-center"
              disabled={isLoading}
            >
              {isLoading ? (
                <><Loader2 className="animate-spin mr-2" size={20} /> Sending Code...</>
              ) : (
                'Get Access Code'
              )}
            </button>
          </form>
        ) : (
          <form onSubmit={handleCodeSubmit} className="space-y-6">
            <div>
              <label htmlFor="accessCode" className="block text-sm font-medium text-gray-700 mb-2">
                Enter Access Code
              </label>
              <input
                type="text"
                id="accessCode"
                value={accessCode}
                onChange={(e) => setAccessCode(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-neura-blue focus:border-transparent"
                placeholder="Enter the code sent to your email"
                required
                disabled={isLoading}
              />
              {message && <p className="mt-2 text-sm text-green-600">{message}</p>}
              {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-neura-blue text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors flex items-center justify-center"
              disabled={isLoading}
            >
              {isLoading ? (
                <><Loader2 className="animate-spin mr-2" size={20} /> Verifying...</>
              ) : (
                'Access Demos'
              )}
            </button>
            <button
              type="button"
              onClick={() => {
                setShowCodeInput(false);
                setError('');
                setMessage('');
              }}
              className="w-full text-neura-blue hover:text-neura-navy transition-colors text-sm"
              disabled={isLoading}
            >
              Use a different email
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginPage;