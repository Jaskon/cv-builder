import type { Config } from 'tailwindcss'

const config: Config = {
  corePlugins: {
    preflight: false,
  },
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'seagreen': '#2f4f4f',
        'dark-seagreen': '#233d3d',
        'lavender': '#acace6',
        'lavender-lavender': '#8282b5',
        'light-gray': '#d6d6d6',
        'silver': '#eeeeee',
        'canary': '#e8Bd3d'
      }
    },
  },
  plugins: [],
}
export default config
