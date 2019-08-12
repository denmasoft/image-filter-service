//based on https://github.com/girliemac/filterous-2
const contrast = require('../contrast');
const saturation = require('../saturation');

module.exports = (pixels) => {
    pixels = contrast.apply(this, [pixels, -0.15]);
    pixels = saturation.apply(this, [pixels, 0.1]);
    return pixels;
  };