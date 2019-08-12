//based on https://github.com/girliemac/filterous-2
// Moon: B/W, increase brightness and decrease contrast
const grayscale = require('../grayscale');
const contrast = require('../contrast');
const brightness = require('../brightness');
module.exports = (pixels) => {
    pixels = grayscale.apply(this, [pixels, 1]);
    pixels = contrast.apply(this, [pixels, -0.04]);
    pixels = brightness.apply(this, [pixels, 0.1]);
    return pixels;
  };