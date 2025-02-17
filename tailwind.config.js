import { getIconCollections, iconsPlugin } from '@egoist/tailwindcss-icons';

// custom style tailwindcss bisa di atur configurasi pada bagian export default. Tinggal diatur properti theme, plugin, dan extend. Masing-masing properti diatur parameternya sesuai dengan kebutuhan tailwindcss 

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    container: {
      center: true
    },
    extend: {
      animation: {
        'slide-top': 'slide-top .5s cubic-bezier(.57,.14,0,1.07) both',
        'slide-bottom': 'slide-bottom 1s cubic-bezier(.57,.14,0,1.07) both',
      },
      keyframes: {
        'slide-top': {
          '0%': {
            '-webkit-transform': 'translateY(100%)',
            transform: 'translateY(100%)',
          },
          '100%': {
            '-webkit-transform': 'translateY(0)',
            transform: 'translateY(0)',
          },
        },
        'slide-bottom': {
          '0%': {
            '-webkit-transform': 'translateY(0)',
            transform: 'translateY(0)',
          },
          '100%': {
            '-webkit-transform': 'translateY(100%)',
            transform: 'translateY(100%)',
          },
        },
      },
      fontSize: {
        'icon-sm': '20px',
        'icon-md': '24px',
        'icon-lg': '28px',
        'icon-xl': '32px',
      },
      colors: {
        brands: {
          'dark-green': '#118871',
          'light-green': '#15AB8E',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        brand: ['Red Rose', 'serif'],
      },
    },
  },
  plugins: [
    iconsPlugin({
      collections: getIconCollections(['material-symbols'])
    })
  ],
}