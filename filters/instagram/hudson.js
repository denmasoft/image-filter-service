//based on https://github.com/girliemac/filterous-2
// Hudson: Creates an "icy" illusion with heightened shadows, cool tint and dodged center
const rgbAdjust = require('../rgbAdjust');
const contrast = require('../contrast');
const brightness = require('../brightness');

module.exports = (pixels) => {
    pixels = rgbAdjust.apply(this, [pixels, [1, 1, 1.25]]);
    pixels = contrast.apply(this, [pixels, 0.1]);
    pixels = brightness.apply(this, [pixels, 0.15]);
    return pixels;
  };