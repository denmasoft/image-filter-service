//based on https://github.com/girliemac/filterous-2
const saturation = require('../saturation');
const contrast = require('../contrast');

// Lo-Fi: Enriches color and adds strong shadows through the use of saturation and "warming" the temperature
module.exports = (pixels) => {
    pixels = contrast.apply(this, [pixels, 0.15]);
    pixels = saturation.apply(this, [pixels, 0.2]);
    return pixels;
  };