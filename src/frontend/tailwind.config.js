import typography from '@tailwindcss/typography';
import containerQueries from '@tailwindcss/container-queries';
import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['index.html', 'src/**/*.{js,ts,jsx,tsx,html,css}'],
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
                border: 'oklch(var(--border))',
                input: 'oklch(var(--input))',
                ring: 'oklch(var(--ring) / <alpha-value>)',
                background: 'oklch(var(--background))',
                foreground: 'oklch(var(--foreground))',
                primary: {
                    DEFAULT: 'oklch(var(--primary) / <alpha-value>)',
                    foreground: 'oklch(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'oklch(var(--secondary) / <alpha-value>)',
                    foreground: 'oklch(var(--secondary-foreground))'
                },
                destructive: {
                    DEFAULT: 'oklch(var(--destructive) / <alpha-value>)',
                    foreground: 'oklch(var(--destructive-foreground))'
                },
                muted: {
                    DEFAULT: 'oklch(var(--muted) / <alpha-value>)',
                    foreground: 'oklch(var(--muted-foreground) / <alpha-value>)'
                },
                accent: {
                    DEFAULT: 'oklch(var(--accent) / <alpha-value>)',
                    foreground: 'oklch(var(--accent-foreground))'
                },
                popover: {
                    DEFAULT: 'oklch(var(--popover))',
                    foreground: 'oklch(var(--popover-foreground))'
                },
                card: {
                    DEFAULT: 'oklch(var(--card))',
                    foreground: 'oklch(var(--card-foreground))'
                },
                chart: {
                    1: 'oklch(var(--chart-1))',
                    2: 'oklch(var(--chart-2))',
                    3: 'oklch(var(--chart-3))',
                    4: 'oklch(var(--chart-4))',
                    5: 'oklch(var(--chart-5))'
                }
            },
            fontFamily: {
                sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
                display: ['General Sans', 'Inter', 'system-ui', 'sans-serif'],
                body: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
                mono: ['Geist Mono', 'Menlo', 'Monaco', 'monospace']
            },
            fontSize: {
                'display-xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '700' }],
                'display-lg': ['3.75rem', { lineHeight: '1.08', letterSpacing: '-0.025em', fontWeight: '700' }],
                'display-md': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
                'display-sm': ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.015em', fontWeight: '600' }],
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
                xl: 'calc(var(--radius) + 4px)',
                '2xl': 'calc(var(--radius) + 8px)'
            },
            boxShadow: {
                xs: '0 1px 2px 0 rgba(0,0,0,0.04)',
                soft: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
                'soft-lg': '0 10px 40px -10px rgba(0, 0, 0, 0.1), 0 20px 50px -5px rgba(0, 0, 0, 0.08)',
                subtle: '0 1px 3px 0 rgba(0,0,0,0.04), 0 4px 12px -2px rgba(0,0,0,0.06)',
                elevated: '0 8px 24px -4px oklch(42% 0.18 250 / 0.12), 0 16px 40px -8px rgba(0,0,0,0.08)',
                premium: '0 20px 50px -12px oklch(42% 0.18 250 / 0.20), 0 8px 24px -6px rgba(0,0,0,0.10)',
                glow: '0 0 30px oklch(42% 0.18 250 / 0.25), 0 0 60px oklch(42% 0.18 250 / 0.12)',
                'inner-glow': 'inset 0 0 30px oklch(42% 0.18 250 / 0.08)',
            },
            spacing: {
                section: '7rem',
                'section-sm': '5rem',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' }
                },
                'fade-in': {
                    from: { opacity: '0', transform: 'translateY(12px)' },
                    to: { opacity: '1', transform: 'translateY(0)' }
                },
                'fade-in-up': {
                    from: { opacity: '0', transform: 'translateY(24px)' },
                    to: { opacity: '1', transform: 'translateY(0)' }
                },
                'slide-up': {
                    from: { opacity: '0', transform: 'translateY(32px)' },
                    to: { opacity: '1', transform: 'translateY(0)' }
                },
                'slide-down': {
                    from: { opacity: '0', transform: 'translateY(-24px)' },
                    to: { opacity: '1', transform: 'translateY(0)' }
                },
                'slide-right': {
                    from: { opacity: '0', transform: 'translateX(-24px)' },
                    to: { opacity: '1', transform: 'translateX(0)' }
                },
                'scale-in': {
                    from: { opacity: '0', transform: 'scale(0.93)' },
                    to: { opacity: '1', transform: 'scale(1)' }
                },
                'scale-in-bounce': {
                    '0%': { opacity: '0', transform: 'scale(0.85)' },
                    '80%': { transform: 'scale(1.03)' },
                    '100%': { opacity: '1', transform: 'scale(1)' }
                },
                'pulse-glow': {
                    '0%, 100%': { opacity: '1', boxShadow: '0 0 20px oklch(42% 0.18 250 / 0.3)' },
                    '50%': { opacity: '0.85', boxShadow: '0 0 40px oklch(42% 0.18 250 / 0.5)' }
                },
                'gradient-shift': {
                    '0%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' }
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-12px)' }
                },
                'shimmer': {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' }
                },
                'spin-slow': {
                    from: { transform: 'rotate(0deg)' },
                    to: { transform: 'rotate(360deg)' }
                },
                'bounce-subtle': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-6px)' }
                },
                'progress-bar': {
                    from: { width: '0%' },
                    to: { width: 'var(--scroll-progress, 0%)' }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-in': 'fade-in 0.5s ease-out',
                'fade-in-up': 'fade-in-up 0.6s ease-out',
                'slide-up': 'slide-up 0.7s cubic-bezier(0.22, 1, 0.36, 1)',
                'slide-down': 'slide-down 0.6s ease-out',
                'slide-right': 'slide-right 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
                'scale-in': 'scale-in 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
                'scale-in-bounce': 'scale-in-bounce 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
                'pulse-glow': 'pulse-glow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'gradient-shift': 'gradient-shift 10s ease infinite',
                'float': 'float 7s ease-in-out infinite',
                'shimmer': 'shimmer 2.5s infinite',
                'spin-slow': 'spin-slow 20s linear infinite',
                'bounce-subtle': 'bounce-subtle 2.5s ease-in-out infinite',
            }
        }
    },
    plugins: [typography, containerQueries, animate]
};
