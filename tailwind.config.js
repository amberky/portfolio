/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        fontSize: {
            'xs': '0.6875rem',     // 11px
            'sm': '0.75rem',       // 12px
            'base': '0.875rem',    // 14px
            'md': '0.9375rem',     // 15px
            'lg': '1rem',          // 16px
            'xl': '1.125rem',      // 18px
            '2xl': '1.25rem',      // 20px
            '3xl': '1.375rem',     // 22px
            '4xl': '1.5rem',       // 24px
            '5xl': '1.625rem',     // 26px
            '6xl': '1.75rem',      // 28px
            '7xl': '1.875rem',     // 1.875rem
            '8xl': '2rem'          // 32px
        },
        extend: {},
    },
    plugins: [],
}

