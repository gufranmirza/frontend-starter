const {
  WebpackBundleSizeAnalyzerPlugin,
} = require('webpack-bundle-size-analyzer')
const { ANALYZE } = process.env

module.exports = {
  webpack: function (config, { dev }) {
    if (ANALYZE) {
      config.plugins.push(new WebpackBundleSizeAnalyzerPlugin('stats.txt'))
    }

    if (dev) {
      config.module.rules.push({
        test: /\.(ts|tsx|js|jsx)$/,
        loader: 'eslint-loader',
        exclude: ['/node_modules/', '/.next/', '/.git/'],
        enforce: 'pre'
      });
    }
    
    
    return config
  },
}
