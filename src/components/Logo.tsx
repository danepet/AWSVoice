import React from 'react';
import { branding } from '../config/branding';

const Logo = () => {
  return (
    <img 
      src={branding.logoWhitePath}
      alt={branding.company}
      className="h-8"
    />
  );
};

export default Logo;