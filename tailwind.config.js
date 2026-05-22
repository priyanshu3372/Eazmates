/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: 'var(--color-brand-primary, #25D366)',
          dark: 'var(--color-brand-dark, #128C7E)',
          teal: 'var(--color-brand-teal, #075E54)',
          light: 'var(--color-brand-light, #DCF8C6)',
          surface: 'var(--color-brand-surface, #FFFFFF)',
          alt: 'var(--color-brand-alt, #F7FDF9)',
          text: {
            primary: 'var(--color-brand-text-primary, #1A1A1A)',
            secondary: 'var(--color-brand-text-secondary, #4A4A4A)',
            light: 'var(--color-brand-text-light, #717171)',
          }
        }
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(18, 140, 126, 0.06), 0 2px 6px -1px rgba(18, 140, 126, 0.04)',
        'premium': '0 10px 30px -5px rgba(7, 94, 84, 0.08), 0 4px 12px -2px rgba(7, 94, 84, 0.04)',
        'whatsapp': '0 2px 5px 0 rgba(0, 0, 0, 0.13)',
      }
    },
  },
  plugins: [],
}
