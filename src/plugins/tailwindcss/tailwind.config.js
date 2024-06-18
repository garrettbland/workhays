/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,jsx,tsx,ejs}'],
    theme: {
        extend: {},
    },
    plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}
