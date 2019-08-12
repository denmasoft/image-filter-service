//based on https://github.com/girliemac/filterous-2
const contrast = require('../contrast');
const saturation = require('../saturation');
const colorFilter = require('../colorFilter');
// Maven: darkens images, increases shadows, and adds a slightly yellow tint overal
module.exports = (pixels) => {
    pixels = colorFilter.apply(this, [pixels, [225, 240, 0, 0.1]]);
    pixels = saturation.apply(this, [pixels, 0.25]);
    pixels = contrast.apply(this, [pixels, 0.05]);
    return pixels;
  };