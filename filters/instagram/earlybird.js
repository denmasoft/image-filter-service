//based on https://github.com/girliemac/filterous-2
const colorFilter = require('../colorFilter');

// Earlybird: Gives an older look with a sepia tint and warm temperature
module.exports = (pixels) => {
    pixels = colorFilter.apply(this, [pixels, [255, 165, 40, 0.2]]);
    return pixels;
  };