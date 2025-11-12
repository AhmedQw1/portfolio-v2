/* eslint-env node */
/**
 * @type {import('tailwindcss').Config}
 * Current Date and Time (UTC - YYYY-MM-DD HH:MM:SS formatted): 2025-08-12 10:49:41
 * Current User's Login: AhmedQw1
 */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      transitionProperty: {
        'colors': 'color, background-color, border-color, text-decoration-color, fill, stroke',
      },
      transitionDuration: {
        '300': '300ms',
        '500': '500ms',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Space Grotesk', 'Inter', 'sans-serif'],
        code: ['JetBrains Mono', 'Consolas', 'monospace'],
        // Keep custom fonts for backward compatibility during transition
        customgoogle: ['CustomGoogleFont', 'sans-serif'],
        comic: ['"Comic Neue"', '"Comic Sans MS"'],
        pixel: ['"Press Start 2P"'],
        retro: ['"VT323"', 'monospace'],
      },
      colors: {
        // New space-inspired color palette
        space: {
          deep: '#0B0E1A',        // Deep space background
          nebula: '#1A1B3A',      // Nebula purple-blue
          cosmic: '#2D1B69',      // Cosmic purple
          aurora: '#00D4AA',      // Aurora green
          starlight: '#F8F8FF',   // Starlight white
          plasma: '#FF6B9D',      // Plasma pink
          void: '#000000',        // Pure void
          'nebula-blue': '#4A90E2', // Nebula blue
          'cosmic-purple': '#6B46C1', // Cosmic purple
          'stellar-blue': '#1E40AF',  // Stellar blue
        },
        // Keep legacy colors for smooth transition
        web2: {
          blue: '#0080FF',
          green: '#00CC66',
          orange: '#FF6600',
          pink: '#FF3399',
          yellow: '#FFCC00',
          purple: '#9933CC',
          red: '#FF3333',
        },
        retro: {
          navy: '#003366',
          teal: '#008080',
          maroon: '#800000',
          olive: '#808000',
        },
      },
      spacing: {
        '0.1': '0.025rem',
        '0.2': '0.05rem',
        '0.3': '0.075rem',
        '0.4': '0.1rem',
      },
      backgroundImage: {
        // New space-themed backgrounds
        'space-gradient': 'linear-gradient(135deg, #0B0E1A 0%, #1A1B3A 50%, #2D1B69 100%)',
        'nebula-gradient': 'linear-gradient(45deg, #2D1B69 0%, #4A90E2 50%, #00D4AA 100%)',
        'cosmic-gradient': 'radial-gradient(circle at center, #2D1B69 0%, #1A1B3A 50%, #0B0E1A 100%)',
        'aurora-gradient': 'linear-gradient(90deg, #00D4AA 0%, #4A90E2 50%, #FF6B9D 100%)',
        'stellar-field': 'radial-gradient(circle at 20% 50%, #ffffff22 1px, transparent 1px), radial-gradient(circle at 80% 50%, #ffffff11 1px, transparent 1px), radial-gradient(circle at 40% 80%, #ffffff08 1px, transparent 1px)',
        
        // Keep legacy patterns for transition
        'dot-pattern': "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAEklEQVQImWNgYGD4z0AswK4SAFXuAf8EPy+xAAAAAElFTkSuQmCC')",
        'stripe-pattern': "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGUlEQVQYlWNgYGD4z4Eo/P//PwMafsixAwCdlhDnLBJfPwAAAABJRU5ErkJggg==')",
        'gradient-blue': 'linear-gradient(to bottom, #0080FF, #0066CC)',
        'gradient-green': 'linear-gradient(to bottom, #00CC66, #009933)',
        'gradient-button': 'linear-gradient(to bottom, #FFFFFF, #DDDDDD)',
        'gradient-metal': 'linear-gradient(to bottom, #EEEEEE, #AAAAAA)',
        'rainbow': 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)',
      },
      boxShadow: {
        'web2': '0 1px 2px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
        'inset': 'inset 0 1px 3px rgba(0, 0, 0, 0.3)',
        'glossy': '0 1px 3px rgba(0, 0, 0, 0.3), inset 0 15px 10px -10px rgba(255, 255, 255, 0.5)',
      },
      animation: {
        'blink': 'blink 1s infinite',
        'marquee': 'marquee 20s linear infinite',
        'spin-slow': 'spin 6s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
    },
  },
  plugins: [],
}