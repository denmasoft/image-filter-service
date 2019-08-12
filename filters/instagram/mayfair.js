//based on https://github.com/girliemac/filterous-2
// Mayfair: Applies a warm pink tone, subtle vignetting to brighten the photograph center and a thin black border
const colorFilter = require('../colorFilter');
const saturation = require('../saturation');
module.exports = (pixels) => {
    colorFilter.apply(this, [pixels, [230, 115, 108, 0.05]]);
    saturation.apply(this, [pixels, 0.15]);
    return pixels;
  };