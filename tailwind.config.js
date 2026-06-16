/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0b1015',
        panel: '#121b24',
        panel2: '#18242f',
        line: '#26384a',
        ink: '#eaf2fa',
        muted: '#7f93a6',
        amber: '#ff7d1a',
        'amber-soft': 'rgba(255,125,26,.14)',
        cyan: '#33d6c8',
        green: '#46d17e',
        red: '#ff5a52',
        'red-soft': 'rgba(255,90,82,.12)',
      },
      fontFamily: {
        disp: ['Saira', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
