//based on https://github.com/girliemac/filterous-2
const sepia = require('../sepia');
const brightness = require('../brightness');
// Stinson: washing out the colors ever so slightly
module.exports = (pixels) => {
    pixels = brightness.apply(this, [pixels, 0.1]);
    pixels = sepia.apply(this, [pixels, 0.3]);
    return pixels;
  };