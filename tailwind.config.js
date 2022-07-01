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
      fontSize: {
        h1: '32px',
        'button-icon': '8px',
        'md-h1': '40px',
        button: '6.5px',
        'sm-button': '10px',
        'sm-link': '15px',
        'title-inicio': '27px',
        'text-button-lg': '20px',
      },
      lineHeight: {
        'line-link': '22px',
        'line-inicio': '40.5px',
      },
      spacing: {
        9: '9px',
        50: '3.125rem',
        46: '2.875rem',
        78: '4.875rem',
        73: '4.5625rem',
        295: '18.43rem',
        387: '24.18rem',
        900: '56.25rem',
        '4rem': '-4rem',
      },
      dropShadow: {
        heroxl: '3px -3px 9px rgba(0, 0, 0, 0.25)',
      },
      minHeight: {
        '70vh': '70vh',
      },
      margin: {
        9: '9px',
        34: '34px',
        92: '90px',
        75: '75px',
        118: '118px',
      },
    },
  },
  plugins: [],
};
