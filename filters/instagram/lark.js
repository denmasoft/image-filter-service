//based on https://github.com/girliemac/filterous-2
// Lark: Brightens and intensifies colours but not red hues
const brightness = require('../brightness');
const rgbAdjust = require('../rgbAdjust');
const saturation = require('../saturation');
module.exports = (pixels) => {
    pixels = brightness.apply(this, [pixels, 0.08]);
    pixels = rgbAdjust.apply(this, [pixels, [1, 1.03, 1.05]]);
    pixels = saturation.apply(this, [pixels, 0.12]);
    return pixels;
  };