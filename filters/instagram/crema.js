//based on https://github.com/girliemac/filterous-2
// Crema: Adds a creamy look that both warms and cools the image
const rgbAdjust = require('../rgbAdjust');
const saturation = require('../saturation');
module.exports = (pixels) => {
    pixels = rgbAdjust.apply(this, [pixels, [1.04, 1, 1.02]]);
    pixels = saturation.apply(this, [pixels, -0.05]);
    return pixels;
  };