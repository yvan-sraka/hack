module.exports = {
  plugins: [
    require('postcss-import')(),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-preset-env'),
    require('cssnano')({
      autoprefixer: false
    })
  ]
}
