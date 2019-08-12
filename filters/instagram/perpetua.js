//based on https://github.com/girliemac/filterous-2
// Perpetua: Adding a pastel look, this filter is ideal for portraits
const rgbAdjust = require('../rgbAdjust');
module.exports = (pixels) => {
    pixels = rgbAdjust.apply(this, [pixels, [1.05, 1.1, 1]]);
    return pixels;
  };