//based on https://github.com/girliemac/filterous-2
const brightness = require('../brightness');
const saturation = require('../saturation');
// Skyline: brightens to the image pop
module.exports = (pixels) => {
    pixels = saturation.apply(this, [pixels, 0.35]);
    pixels = brightness.apply(this, [pixels, 0.1]);
    return pixels;
  };