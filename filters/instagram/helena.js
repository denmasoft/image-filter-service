//based on https://github.com/girliemac/filterous-2
const colorFilter = require('../colorFilter');
const contrast = require('../contrast');
// Helena: adds an orange and teal vibe
module.exports = (pixels) => {
    pixels = colorFilter.apply(this, [pixels, [208, 208, 86, 0.2]]);
    pixels = contrast.apply(this, [pixels, 0.15]);
    return pixels;
  };