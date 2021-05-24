module.exports = {
  plugins: {
    'postcss-import': {}, // Import plugin must come before tailwind
    tailwindcss: {},
    // Other plugins comes between tailwind and autoprefixer
    'postcss-nested': {},
    'postcss-combine-media-query': {}, // Media query must come before duplicated-selectors
    'postcss-combine-duplicated-selectors': {},
    autoprefixer: {}
  }
};
