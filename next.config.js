const withPreact = require('next-plugin-preact')

const webpack = (config) => {
  config.module.rules.push({
    test: /png|jpe?g|gif|woff|woff2|ico/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[name]-[contenthash].[ext]',
          outputPath: './static/assets',
          publicPath: './_next/static/assets'
        }
      }
    ]
  })
  return config
}

module.exports = withPreact({ webpack })
