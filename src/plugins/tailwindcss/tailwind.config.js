/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/http/**/*.{html,js,ts}', './src/apps/**/*.{jsx,tsx}'],
    theme: {
        extend: {},
    },
    plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}
