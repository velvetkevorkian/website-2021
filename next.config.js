// eslint-disable-next-line @typescript-eslint/no-var-requires
const withImages = require('next-images')

module.exports = withImages({
  esModule: true,
  inlineImageLimit: 0,
})
