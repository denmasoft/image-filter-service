//based on https://github.com/girliemac/filterous-2
const colorFilter = require('../colorFilter');
const sepia = require('../sepia');
// Brooklyn
module.exports = (pixels) => {
    pixels = colorFilter.apply(this, [pixels, [25, 240, 252, 0.05]]);
    pixels = sepia.apply(this, [pixels, 0.3]);
    return pixels;
  };