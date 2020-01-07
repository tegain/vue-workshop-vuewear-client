const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const BundleAnalyzer = new BundleAnalyzerPlugin({
  openAnalyzer: false
});

module.exports = {
  parallel: process.env.NODE_ENV !== 'production',
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'development') {
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
