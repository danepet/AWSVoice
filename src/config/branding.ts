// Branding configuration using environment variables
export const branding = {
  name: import.meta.env.VITE_BRAND_NAME || "Agentforce Voice",
  company: import.meta.env.VITE_BRAND_COMPANY || "NeuraFlash",
  tagline: import.meta.env.VITE_BRAND_TAGLINE || "AI for Voice",
  description: import.meta.env.VITE_BRAND_DESCRIPTION || "Try out our AI Voice bots built for the high value use-cases and see the future of your business in real-time.",
  videoUrl: import.meta.env.VITE_BRAND_VIDEO_URL || "https://www.youtube.com/embed/iRlA4k5D3pk",
  logoPath: import.meta.env.VITE_BRAND_LOGO_PATH || "/neuraflash-logo.svg",
  logoWhitePath: import.meta.env.VITE_BRAND_LOGO_WHITE_PATH || "/neuraflash-logo-white.svg",
  primaryColor: import.meta.env.VITE_BRAND_PRIMARY_COLOR || "#00A7B1",
  secondaryColor: import.meta.env.VITE_BRAND_SECONDARY_COLOR || "#0052CC",
  contactUrl: import.meta.env.VITE_CONTACT_URL || "https://www.neuraflash.com/contact",
  companyWebsite: import.meta.env.VITE_COMPANY_WEBSITE || "https://www.neuraflash.com",
};

// Page titles and meta descriptions
export const pageTitles = {
  main: `${branding.name} | ${branding.company}`,
  demos: `Voice API Demos | ${branding.company}`,
  login: `Login - ${branding.name} | ${branding.company}`,
};

export const metaDescriptions = {
  main: `Experience ${branding.name} - Interactive voice API demos by ${branding.company}`,
  demos: `Try ${branding.name} demos - Interactive voice AI experiences`,
  login: `Access ${branding.name} demos with your credentials`,
};