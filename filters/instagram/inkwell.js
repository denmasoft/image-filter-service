//based on https://github.com/girliemac/filterous-2
const grayscale = require('../grayscale');

// Inkwell: Direct shift to black and white
module.exports = (pixels) => {
    pixels = grayscale.apply(this, [pixels, 1]);
    return pixels;
  };