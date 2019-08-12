//based on https://github.com/girliemac/filterous-2
const brightness = require('../brightness');
const contrast = require('../contrast');
// Dogpatch: increases the contrast, while washing out the lighter colors
module.exports = (pixels) => {
    pixels = contrast.apply(this, [pixels, 0.15]);
    pixels = brightness.apply(this, [pixels, 0.1]);
    return pixels;
  };