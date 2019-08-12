//based on https://github.com/girliemac/filterous-2
const brightness = require('../brightness');
const colorFilter = require('../colorFilter');
// Walden: Increases exposure and adds a yellow tint
module.exports = (pixels) => {
    pixels = brightness.apply(this, [pixels, 0.1]);
    pixels = colorFilter.apply(this, [pixels, [255, 255, 0, 0.2]]);
    return pixels;
  };
  