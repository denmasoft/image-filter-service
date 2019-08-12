//based on https://github.com/girliemac/filterous-2
// Gingham: Vintage-inspired, taking some color out
const sepia = require('../saturation');
const contrast = require('../saturation');
module.exports = (pixels) => {
    pixels = sepia.apply(this, [pixels, 0.04]);
    pixels = contrast.apply(this, [pixels, -0.15]);
    return pixels;
  };