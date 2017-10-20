const path = require('path')
const isPrebuild = !!process.env.PREBUILD;

const plugins = isPrebuild ? [
  'lasso-marko',
  {
    plugin: 'lasso-s3-writer',
    enabled: !!process.env.PREBUILD,
    config: {
      bucket: 'my-marko-bucket'
    }
  }
] : [];

module.exports = {
  plugins: plugins,
  cacheDir: path.join(__dirname, '/cache'),
  outputDir: path.join(__dirname, '/static'),
  cacheProfile: 'production',
  cacheKey: 'production',
  bundlingEnabled: true,
  minify: true,
  fingerprintsEnabled: true
}
