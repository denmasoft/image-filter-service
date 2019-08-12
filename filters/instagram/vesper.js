//based on https://github.com/girliemac/filterous-2
const colorFilter = require('../colorFilter');
const brightness = require('../brightness');
const contrast = require('../contrast');
// Vesper: adds a yellow tint that
module.exports = (pixels) => {
    pixels = colorFilter.apply(this, [pixels, [255, 225, 0, 0.05]]);
    pixels = brightness.apply(this, [pixels, 0.06]);
    pixels = contrast.apply(this, [pixels, 0.06]);
    return pixels;
  };