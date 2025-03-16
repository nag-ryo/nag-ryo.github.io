import type { Config } from "tailwindcss";

export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/storage/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            keyframes: {
                'scale-up': {
                    '0%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.025)' },
                    '100%': { transform: 'scale(1)' },
                },
            },
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
            },
            animation: {
                'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'scale-up': 'scale-up 2s ease-in-out infinite',
            },
        },
    },
    variants: {
        extend: {
            animation: ['hover', 'focus'],
        },
    },
    plugins: [],
    safelist: [
        {
          pattern: /bg-(blue|red|green|yellow|emerald|gray)-50/, // 背景色
        },
        {
          pattern: /text-(blue|red|green|yellow|emerald|gray)-700/, // テキスト色
        },
    ],
} satisfies Config;
