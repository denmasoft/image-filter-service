//based on https://github.com/girliemac/filterous-2
// Aden: This filter gives a blue/pink natural look
const colorFilter = require('../colorFilter');
const saturation = require('../saturation');
module.exports = (pixels) => {
  console.log(colorFilter);
    pixels = colorFilter.apply(this, [pixels, [228, 130, 225, 0.13]]);
    pixels = saturation.apply(this, [pixels, -0.2]);
    return pixels;
  };