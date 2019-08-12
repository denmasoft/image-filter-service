//based on https://github.com/girliemac/filterous-2
const contrast = require('../contrast');
const colorFilter = require('../colorFilter');

// Nashville: Warms the temperature, lowers contrast and increases exposure to give a light "pink" tint – making it feel "nostalgic"
module.exports = (pixels) => {
    pixels = colorFilter.apply(this, [pixels, [220, 115, 188, 0.12]]);
    pixels = contrast.apply(this, [pixels, -0.05]);
    return pixels;
  };