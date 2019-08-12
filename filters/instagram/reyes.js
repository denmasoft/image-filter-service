//based on https://github.com/girliemac/filterous-2
// Reyes: a new vintage filter, gives your photos a “dusty” look
const brightness = require('../brightness');
const sepia = require('../sepia');
const contrast = require('../contrast');
module.exports = (pixels) => {
    pixels = sepia.apply(this, [pixels, 0.4]);
    pixels = brightness.apply(this, [pixels, 0.13]);
    pixels = contrast.apply(this, [pixels, -0.05]);
    return pixels;
  };