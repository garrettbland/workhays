module.exports = {
  theme: {
    extend: {}
  },
  variants: {
    translate: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: [require('@tailwindcss/ui'), require('@tailwindcss/custom-forms')]
}
