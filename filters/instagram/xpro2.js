//based on https://github.com/girliemac/filterous-2
const colorFilter = require('../colorFilter');
const contrast = require('../contrast');
const saturation = require('../saturation');
// X-Pro II: Increases color vibrance with a golden tint, high contrast and slight vignette added to the edges
module.exports = (pixels) => {
    pixels = colorFilter.apply(this, [pixels, [255, 255, 0, 0.07]]);
    pixels = saturation.apply(this, [pixels, 0.2]);
    pixels = contrast.apply(this, [pixels, 0.15]);
    return pixels;
  };