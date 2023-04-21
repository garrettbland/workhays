module.exports = {
  theme: {
    opacity: {
      '25': '.25',
      '50': '.5',
      '75': '.75',
      '90': '.9'
    },
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
