//based on https://github.com/girliemac/filterous-2
// Amaro: Adds light to an image, with the focus on the centre
const saturation = require('../saturation');
const brightness = require('../brightness');
module.exports = (pixels) => {
    pixels = saturation.apply(this, [pixels, 0.3]);
    pixels = brightness.apply(this, [pixels, 0.15]);
    return pixels;
  };