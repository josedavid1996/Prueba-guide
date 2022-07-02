module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
    },
    borderRadius: {
      'rounded-btn': '92px',
    },
    fontFamily: {
      poppins: ['Poppins'],
    },
    colors: {
      'color-btn': '#F00109',
      header: ' #0205C7',
      'color-white1': '#E5E5E5',
      'color-white2': '#FFFFFF',
      'color-green': '#00E676',
      'color-purple': '#8297E0',
      'color-black': '#000000',
      'color-yellow': '#FFC635',
      hero: '#8D8D8D',
      circle: '#9D9D9D',
      'circle-opacity': '#E7E5E5',
    },
    extend: {
      maxWidth: {
        940: '940px',
      },
      backgroundImage: {
        'img-civil': "url('./src/assets/img/civiles.jpg'')",
      },
      fontSize: {
        h1: '32px',
        'button-icon': '8px',
        'md-h1': '40px',
        button: '6.5px',
        'sm-button': '10px',
        'sm-link': '15px',
        'title-inicio': '27px',
        'button-lg': '20px',
        'title-h2-sm': '27px',
        100: '100px',
      },
      lineHeight: {
        'line-link': '22px',
        'line-inicio': '40.5px',
      },
      spacing: {
        9: '9px',
        36: '36px',
        46: '2.875rem',
        50: '3.125rem',
        78: '4.875rem',
        73: '4.5625rem',
        150: '150px',
        295: '18.43rem',
        387: '24.18rem',
        900: '56.25rem',
        '4rem': '-4rem',
        760: '47.5rem',
      },
      dropShadow: {
        heroxl: '3px -3px 9px rgba(0, 0, 0, 0.25)',
      },
      minHeight: {
        '63vh': '75vh',
      },
      margin: {
        '9-circle': '9px',
        36: '36px',
        34: '34px',
        92: '90px',
        75: '75px',
        62: '62px',
        118: '118px',
      },
      screens: {
        'ms-hero': '900px',
      },
    },
  },
  plugins: [],
};
