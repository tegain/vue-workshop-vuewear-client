const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const BundleAnalyzer = new BundleAnalyzerPlugin({
  openAnalyzer: false
});

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  parallel: !isProduction,
  configureWebpack: config => {
    if (!isProduction) {
      config.plugins.push(BundleAnalyzer);
    }
  },
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        data: `@import "@/styles/imports.scss";`
      }
    }
  },

  devServer: {
    disableHostCheck: true
  },

  chainWebpack: config => {
    config.plugins.delete('prefetch');
  }
};
