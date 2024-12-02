/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      // colors: {
      //   blueColor: "#2374e1",
      //   lightBlueColor: "#1d9bf0",
      //   darkBlueColor: "#0a66c2",
      //   darkerBlueColor: "#143ce8",
      //   redColor: "#ff0000",
      //   greenColor: "#03a696",
      //   greyColor: "#f6f6f6",
      //   darkGreenColor: "#42959b",
      //   htmlColor: "#e34f26",
      //   cssColor: "#1572b6",
      //   javascriptColor: "#f7df1e",
      //   reactjsColor: "#61dafb",
      //   pythonColor: "#3776ab",
      //   scssColor: "#cc6699",
      //   //Dark theme:
      //   backgroundColor: "#000000", // --color-black
      //   textColor: "#ffffff", // --color-white
      //   boxImgColor: "#03a696", // --color-green
      //   linkBgColor: "#03a696", // --color-green
      //   greyColor: "#080808", // --color-grey
      //   inputBorderColor: "#ffffff", // --color-white
        // --color-github
      //   htmlColor: "#ff5722", // --color-html
      //   cssColor: "#2965f1", // --color-css
      //   javascriptColor: "#ffeb3b", // --color-javascript
      //   reactjsColor: "#00d8ff", // --color-reactjs
      //   pythonColor: "#4b8bbe", // --color-python
      //   scssColor: "#ff66cc", // --color-scss
      // },
      boxShadow: {
        bioPic: '2.17543px 8.7017px 38.0699px rgba(0, 0, 0, 0.15)',
      },
      borderRadius: {
        'bioPic': '1.8rem',
      },
      height: {
        '36': '36rem',
      },
      colors: {
        greenColor: "#03a696",
        githubColor: "#171515",
        githubColorDark: "#f5f5f5", 
        linkedinColor: "#0a66c2",
      },
    },
  },
  variants: {},
  plugins: [],
}
