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
    },
    extend: {
      fontSize: {
        h1: '32px',
        'sm-h1': '40px',
        button: '6.5px',
        'sm-button': '10px',
        'sm-link': '15px',
      },
      lineHeight: {
        'line-link': '22px',
      },
      spacing: {
        50: '3.125rem',
        46: '2.875rem',
        78: '4.875rem',
        73: '4.5625rem',
        295: '18.43rem',
        '-32': '32px',
      },
    },
  },
  plugins: [],
};
