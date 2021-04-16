const withPreact = require('next-plugin-preact')
const withImages = require('next-images')

module.exports = withPreact(withImages({
  future: {
    webpack5: true,
  },
  esModule: true,
  inlineImageLimit: 0,
}))
