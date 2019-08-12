//based on https://github.com/girliemac/filterous-2
// Clarendon: adds light to lighter areas and dark to darker areas
const brightness = require('../brightness');
const contrast = require('../contrast');
const saturation = require('../saturation');
module.exports = (pixels) => {
    pixels = brightness.apply(this, [pixels, 0.1]);
    pixels = contrast.apply(this, [pixels, 0.1]);
    pixels = saturation.apply(this, [pixels, 0.15]);
    return pixels;
  };