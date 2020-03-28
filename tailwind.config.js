module.exports = {
  theme: {
    extend: {
      spacing: {
        '0.1': '0.1rem'
      }
    }
  },
  variants: {
    translate: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: [require('@tailwindcss/ui'), require('@tailwindcss/custom-forms')]
}
