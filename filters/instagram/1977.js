//based on https://github.com/girliemac/filterous-2
const brightness = require('../brightness');
const colorFilter = require('../colorFilter');
// 1977: The increased exposure with a red tint gives the photograph a rosy, brighter, faded look.
module.exports = (pixels) => {
    pixels = colorFilter.apply(this, [pixels, [255, 25, 0, 0.15]]);
    pixels = brightness.apply(this, [pixels, 0.1]);
    return pixels;
  };