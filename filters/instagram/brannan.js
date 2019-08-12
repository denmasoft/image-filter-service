//based on https://github.com/girliemac/filterous-2
const colorFilter = require('../colorFilter');
const contrast = require('../contrast');
// Brannan: Increases contrast and exposure and adds a metallic tint
module.exports = (pixels) => {
    pixels = contrast.apply(this, [pixels, 0.2]);
    pixels = colorFilter.apply(this, [pixels, [140, 10, 185, 0.1]]);
    return pixels;
  };