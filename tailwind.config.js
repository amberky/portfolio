/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{html,ts}'
    ],
    theme: {
        fontSize: {
            'xss': '0.625rem',
            'xs': '0.75rem',       // 12px
            'sm': '0.9375rem',     // 15px
            'base': '1rem',        // 16px
            'md': '1.125rem',      // 18px
            'lg': '1.25rem',       // 20px
            'xl': '1.375rem',      // 22px
            '2xl': '1.5rem',       // 24px
            '3xl': '1.625rem',     // 26px
            '4xl': '1.75rem',      // 28px
            '5xl': '1.875rem',     // 30px
            '6xl': '2rem',         // 32px
            '7xl': '2.125rem'      // 34px
        },
        extend: {
            gridTemplateColumns: {
                'experience-tree': '4rem 1rem auto'
            },
            borderWidth: {
                '1': '1px'
            },
            ringOffsetWidth: {
                '6': '6px'
            }
        },
    },
    plugins: [],
};

