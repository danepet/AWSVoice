import { branding, pageTitles, metaDescriptions } from '../config/branding';

export const updatePageMeta = (page: 'main' | 'demos' | 'login') => {
  // Update title
  document.title = pageTitles[page];
  
  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', metaDescriptions[page]);
  }
  
  // Update favicon if needed (optional)
  const favicon = document.querySelector('link[rel="icon"]');
  if (favicon && branding.logoPath !== '/neuraflash-logo.svg') {
    // You could update favicon here if you have different brand favicons
  }
};