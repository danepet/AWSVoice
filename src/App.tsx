import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DemoGallery from './components/DemoGallery';
import Features from './components/Features';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';
import DemoPage from './components/DemoPage';
import { VapiProvider } from './context/VapiContext';
import { useAuthStore } from './store/authStore';
import { updatePageMeta } from './utils/metaUpdater';

function App() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  useEffect(() => {
    // Update meta tags on app load
    updatePageMeta('main');
  }, []);

  return (
    <BrowserRouter>
      <VapiProvider>
        <Routes>
          <Route
            path="/demos"
            element={<DemoPage />}
          />
          <Route
            path="/login"
            element={<LoginPage />}
          />
          <Route
            path="/"
            element={
              <div className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-grow">
                  <Hero />
                  <DemoGallery />
                  <Features />
                </main>
                <Footer />
                <div className="fixed top-0 left-0 right-0 bottom-0 pointer-events-none z-0">
                  <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-neura-teal opacity-10 animate-float"></div>
                  <div className="absolute bottom-40 left-20 w-40 h-40 rounded-full bg-neura-blue opacity-10 animate-float-delay"></div>
                  <div className="absolute top-60 left-1/4 w-24 h-24 rounded-full bg-neura-lightblue opacity-10 animate-float"></div>
                </div>
              </div>
            }
          />
        </Routes>
      </VapiProvider>
    </BrowserRouter>
  );
}

export default App