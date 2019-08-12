//based on https://github.com/girliemac/filterous-2
const sepia = require('../sepia');
const colorFilter = require('../colorFilter');
// Toaster: Ages the image by "burning" the centre and adds a dramatic vignette
module.exports = (pixels) => {
    pixels = sepia.apply(this, [pixels, 0.1]);
    pixels = colorFilter.apply(this, [pixels, [255, 145, 0, 0.2]]);
    return pixels;
  };
  