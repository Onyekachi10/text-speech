/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./index.html",
    "./src/js/app.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        customFont:["Open sans","sans" ]
      }, 

      borderColor: {
        customBorder:"1px solid black"
      }
    },
  },
  plugins: [],
}

