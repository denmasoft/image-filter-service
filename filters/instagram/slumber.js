//based on https://github.com/girliemac/filterous-2
// Slumber: Desaturates the image as well as adds haze for a retro, dreamy look – with an emphasis on blacks and blues
const brightness = require('../brightness');
const saturation = require('../saturation');
module.exports = (pixels) => {
    pixels = brightness.apply(this, [pixels, 0.1]);
    pixels = saturation.apply(this, [pixels, -0.5]);
    return pixels;
  };