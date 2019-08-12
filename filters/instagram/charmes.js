//based on https://github.com/girliemac/filterous-2
const colorFilter = require('../colorFilter');
const contrast = require('../contrast');
// Charmes: a high contrast filter, warming up colors in your image with a red tint
module.exports = (pixels) => {
    pixels = colorFilter.apply(this, [pixels, [255, 50, 80, 0.12]]);
    pixels = contrast.apply(this, [pixels, 0.05]);
    return pixels;
  };