//based on https://github.com/girliemac/filterous-2
const rgbAdjust = require('../rgbAdjust');
const saturation = require('../saturation');
const colorFilter = require('../colorFilter');
// Kelvin: Increases saturation and temperature to give it a radiant "glow"
module.exports = (pixels) => {
    pixels = colorFilter.apply(this, [pixels, [255, 140, 0, 0.1]]);
    pixels = rgbAdjust.apply(this, [pixels, [1.15, 1.05, 1]]);
    pixels = saturation.apply(this, [pixels, 0.35]);
    return pixels;
  };