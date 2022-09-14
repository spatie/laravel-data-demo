const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            colors: {
                gray: colors.zinc,
            },
            fontFamily: {
                sans: ['Work Sans', ...defaultTheme.fontFamily.sans],
                serif: ['Noto Serif Display', ...defaultTheme.fontFamily.serif],
            },
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
