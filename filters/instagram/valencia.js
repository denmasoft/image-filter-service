//based on https://github.com/girliemac/filterous-2
const colorFilter = require('../colorFilter');
const contrast = require('../contrast');
const saturation = require('../saturation');
// Valencia: Fades the image by increasing exposure and warming the colors, to give it an antique feel
module.exports = (pixels) => {
    pixels = colorFilter.apply(this, [pixels, [255, 225, 80, 0.08]]);
    pixels = saturation.apply(this, [pixels, 0.1]);
    pixels = contrast.apply(this, [pixels, 0.05]);
    return pixels;
  };