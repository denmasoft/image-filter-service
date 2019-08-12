//based on https://github.com/girliemac/filterous-2
const brightness = require('../brightness');
const sepia = require('../sepia');
// Ginza: brightens and adds a warm glow
module.exports = (pixels) => {
    sepia.apply(this, [pixels, 0.06]);
    brightness.apply(this, [pixels, 0.1]);
    return pixels;
  };