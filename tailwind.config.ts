import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montsterrat: ['Montserrat', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      gap: {
        21: '5.25rem',
      },
      fontSize: {
        '1.75xl': '1.75rem',
        '2.5xl': '2.5rem',
        '7.5xl': '5rem',
      },
      width: {
        100: '25rem',
        140: '35rem',
      },
      maxWidth: {
        100: '25rem',
        140: '35rem',
      },
      borderRadius: {
        '2.5xl': '1.25rem',
      },
      margin: {
        25: '6.25rem',
      },
      colors: {
        'custom-gray': '#757575',
        'custom-blue': '#079BEE',
        'custom-background-gray': '#eee',
        'custom-light-blue': '#E3FCFF',
        'custom-light-gray': '#f6f6f6',
      },
      padding: {
        30: '7.5rem',
      },
      backgroundImage: {
        header: 'url("../images/background-image.png")',
        footer: 'url("../images/footer-image.png")',
      },
    },
  },
  plugins: [],
} satisfies Config
