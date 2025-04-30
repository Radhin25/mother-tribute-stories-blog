
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        },
        mother: {
          light: '#FADADD',  // Blush Pink - tenderness and love
          DEFAULT: '#ECA1A6', // Muted Rose - elegance with affection
          dark: '#E75480',    // Deeper Rose - warmth and compassion
          warmth: '#FFF8F0',  // Warm Cream - nurturing background warmth
          comfort: '#E8DAEF', // Soft Lavender - tranquility and calmness
          love: '#A3B18A',    // Olive Green - natural balance and care
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Poppins', 'Open Sans', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        },
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'scale-up': {
          '0%': {
            transform: 'scale(0.98)',
          },
          '100%': {
            transform: 'scale(1)',
          }
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-5px)',
          }
        },
        'glow': {
          '0%, 100%': {
            boxShadow: '0 0 5px rgba(236, 161, 166, 0.5)',
          },
          '50%': {
            boxShadow: '0 0 15px rgba(236, 161, 166, 0.8)',
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
        'scale-up': 'scale-up 0.2s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite'
      },
      typography: {
        DEFAULT: {
          css: {
            'h2, h3, h4': {
              fontFamily: 'Playfair Display, serif',
              fontWeight: '700'
            },
            a: {
              color: '#ECA1A6',
              '&:hover': {
                color: '#E75480',
              },
            },
            p: {
              lineHeight: '1.8',
            }
          },
        },
      },
      backgroundImage: {
        'mother-gradient': 'linear-gradient(135deg, #FADADD 0%, #FFF8F0 100%)',
        'mother-card': 'linear-gradient(180deg, #FFF8F0 0%, #FADADD 20%)',
        'mother-comfort': 'linear-gradient(to right, #E8DAEF 0%, #FADADD 48%, #ECA1A6 100%)',
      }
    }
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography")
  ],
} satisfies Config;
