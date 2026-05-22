export interface ThemeTokens {
  colors: {
    primary: string;
    dark: string;
    teal: string;
    light: string;
    surface: string;
    alt: string;
    textPrimary: string;
    textSecondary: string;
    textLight: string;
  };
  typography: {
    bodyFont: string;
    headingFont: string;
    minFontSize: string;
    prefFontSize: string;
  };
}

export const themeConfig: ThemeTokens = {
  colors: {
    primary: '#25D366', // Primary Green (WhatsApp accent)
    dark: '#128C7E',    // Dark Green (WhatsApp Brand)
    teal: '#075E54',    // Teal (WhatsApp Header)
    light: '#DCF8C6',   // Light Green (WhatsApp chat bubble background)
    surface: '#FFFFFF', // Clean White surface
    alt: '#F7FDF9',     // Alternating background (very light mint tint)
    textPrimary: '#1F2E26',   // Deep green-gray for rich contrast
    textSecondary: '#425248', // Subheadings
    textLight: '#708577',     // Placeholders, disabled states
  },
  typography: {
    bodyFont: 'DM Sans, sans-serif',
    headingFont: 'Playfair Display, serif',
    minFontSize: '16px',
    prefFontSize: '18px',
  }
};
