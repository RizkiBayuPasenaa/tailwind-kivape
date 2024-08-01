/** @type {import('tailwindcss').Config} */
export const content = ['./public/**/*.{html,js}'];
export const theme = {
  extend: {
    fontFamily: {
      ubuntu: ['Ubuntu', 'DejaVu Sans', 'Arial', 'sans-serif']
    },
    colors: {
      background: '#0C0627',
      primary: '#FD5D9C',
      secondary: "#21E6F9"
    },
    spacing: {
      "5p": "5%",
      "8p": "8%",
      "10p": "10%",
      "20p": "20%",
      "80p": "80%",
      "40vh": "40vh",
      "120vh": "120vh"
    }
  },
};
export const plugins = [];

