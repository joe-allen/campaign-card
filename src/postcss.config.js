const purge = require('@fullhuman/postcss-purgecss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    cssnano({
      preset: 'default',
    }),
    purge({
      content: ['./src/*.html', './src/*.js', './src/js/*.js'],
      css: ['./src/css/index.css'],
    }),
    autoprefixer
  ],
}