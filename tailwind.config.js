module.exports = {
  purge: [
    "./src/**/*.css", 
    "./**/*.html",
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      black: "#14141A",
      white: "#fff",
      blue: "#0371FF",
      lightGray: "#E5E5E5",
      footer_color: "#2C2C33",
      opacity_gray: 'rgba(0, 0, 0, 0.07)',
      opacity_background: 'rgba(0, 0, 0, 0.7)',
      card_background: '#F8F8F8',
      orange_color: '#FF7733'
    },
    fontSize: {
      'sm' : '14px',
      'md' : '16px',
      'mdx': '20px',
      'rem1' : '1rem',
      'rem1Half': '1.5rem',
      'rem2' : '2rem',
      'rem2Half': '2.5rem',
      'rem3' : '3rem',
      'rem3Half' : '3.5rem',
      'rem4': '4rem'
    },
    spacing: {
      'remHalf' : '0.5rem',
      xs : '4px',
      none: '0px',
      sm: '8px',
      md: '16px',
      lg: '30px',
      xl: '48px',
      percent: "50%",

      'rem1' : '1rem',
      'rem1Half': '1.5rem',
      'rem2' : '2rem',
      'rem2Half': '2.5rem',
      'rem3' : '3rem',
      'rem3Half' : '3.5rem',
      'rem4' : '4rem',
      'rem5' : '5rem'
    },
    screens:{
      'phone' : {'max' : '639px'},
      'tablet' : {'max': '767px'},
      'laptop' : {'max': '1023px'},
      'desktop': {'max': '1279px'},
      'icon_stack': {
        'min' : '640px',
        'max' : '767px'
      },
      'desktop_custom':{
        'min': '1024px',
        'max' : '1279px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
