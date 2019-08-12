//based on https://github.com/girliemac/filterous-2
const brightness = require('../brightness');
const saturation = require('../saturation');
// Sutro: Burns photo edges, increases highlights and shadows dramatically with a focus on purple and brown colors
module.exports = (pixels) => {
    pixels = brightness.apply(this, [pixels, -0.1]);
    pixels = saturation.apply(this, [pixels, -0.1]);
    return pixels;
  };