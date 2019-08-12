//based on https://github.com/girliemac/filterous-2
const contrast = require('../contrast');
const saturation = require('../saturation');
// Hefe: Hight contrast and saturation, with a similar effect to Lo-Fi but not quite as dramatic
module.exports = (pixels) => {
    pixels = contrast.apply(this, [pixels, 0.1]);
    pixels = saturation.apply(this, [pixels, 0.15]);
    return pixels;
  };