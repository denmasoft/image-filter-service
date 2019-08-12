// Rise: Adds a "glow" to the image, with softer lighting of the subject
//based on https://github.com/girliemac/filterous-2
const colorFilter = require('../colorFilter');
const brightness = require('../brightness');
const saturation = require('../saturation');
module.exports = (pixels) => {
    pixels = colorFilter.apply(this, [pixels, [255, 170, 0, 0.1]]);
    pixels = brightness.apply(this, [pixels, 0.09]);
    pixels = saturation.apply(this, [pixels, 0.1]);
    return pixels;
  };