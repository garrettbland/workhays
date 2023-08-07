/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/http/**/*.{html,js,ts}'],
    theme: {
        extend: {},
    },
    plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}
