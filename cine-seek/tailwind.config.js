module.exports = {
    content: [
      "./src/**/*.{html,js}", // Includes all HTML and JS files in the src folder and subfolders
      "./index.html",         // Includes your main HTML file
    ],
    theme: {
        extend: {
            fontFamily: {
                barrio: ['Barrio', 'cursive'], // Add Barrio font
                inter: ['Inter', 'sans-serif'], // Add Inter font
                roboto: ['Roboto', 'sans-serif'], // Add Roboto font
                kirang: ['"Kirang Haerang"', 'cursive'], // Add Roboto font
              },
      },
    },
    plugins: [],
  };
  