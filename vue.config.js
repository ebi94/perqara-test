// Add in the top of the file
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // Here as example if needed:
        // Import Sass vars and mixins for SFC's style blocks
        prependData: '@import "@/assets/styles/abstracts/_variables.scss"; @import "@/assets/styles/abstracts/_mixins.scss";',
      },
    },
  },
  lintOnSave: process.env.NODE_ENV !== 'production',
  productionSourceMap: false,
  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  configureWebpack: {
    // Fast source maps in dev
    devtool: process.env.NODE_ENV === 'production' ? false : 'cheap-eval-source-map',
    plugins: [
      new StyleLintPlugin({
        files: 'src/**/*.{vue,scss}',
      }),
    ],
    resolve: {
      alias: {
        // Alias @ to /src folder for ES/TS imports
        '@': path.join(__dirname, '/src'),
      },
    },
  },
};