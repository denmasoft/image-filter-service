//based on https://github.com/girliemac/filterous-2
const colorFilter = require('../colorFilter');
const brightness = require('../brightness');
// Ashby: gives images a great golden glow and a subtle vintage feel
module.exports = (pixels) => {
    pixels = colorFilter.apply(this, [pixels, [255, 160, 25, 0.1]]);
    pixels = brightness.apply(this, [pixels, 0.1]);
    return pixels;
  };