const RGBtoHSV = require('./RGBtoHSV');
const HSVtoRGB = require('./HSVtoRGB');
//based on https://github.com/girliemac/filterous-2
// Better result (slow) - adj should be < 1 (desaturated) to 1 (unchanged) and < 1
module.exports = (pixels, adj) => {
    let d = pixels.data;
    for (let i = 0; i < d.length; i += 4) {
      let hsv = RGBtoHSV(d[i], d[i+1], d[i+2]);
      hsv[1] *= adj;
      let rgb = HSVtoRGB(hsv[0], hsv[1], hsv[2])
      d[i] = rgb[0];
      d[i + 1] = rgb[1];
      d[i + 2] = rgb[2];
      }
      return pixels;
  };