//based on https://github.com/girliemac/filterous-2
const brightness = require('../brightness');
const colorFilter = require('../colorFilter');
const grayscale = require('../grayscale');
// Willow: A monochromatic filter with subtle purple tones and a translucent white border
module.exports.willow = (pixels) => {
    pixels = grayscale.apply(this, [pixels, 1]);
    pixels = colorFilter.apply(this, [pixels, [100, 28, 210, 0.03]]);
    pixels = brightness.apply(this, [pixels, 0.1]);
    return pixels;
  };