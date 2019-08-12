//based on https://github.com/girliemac/filterous-2
// Ludwig: A slight hint of desaturation that also enhances light
const brightness = require('../brightness');
const saturation = require('../saturation');
module.exports = (pixels) => {
    pixels = brightness.apply(this, [pixels, 0.05]);
    pixels = saturation.apply(this, [pixels, -0.03]);
    return pixels;
  };