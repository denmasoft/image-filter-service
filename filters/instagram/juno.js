//based on https://github.com/girliemac/filterous-2
// Juno: Brightens colors, and intensifies red and yellow hues
const rgbAdjust = require('../rgbAdjust');
const saturation = require('../saturation');
module.exports = (pixels) => {
    pixels = rgbAdjust.apply(this, [pixels, [1.01, 1.04, 1]]);
    pixels = saturation.apply(this, [pixels, 0.3]);
    return pixels;
  };