//based on https://github.com/girliemac/filterous-2
// ColorFilter - add a slight color overlay. rgbColor is an array of [r, g, b, adj]
module.exports = (pixels, rgbColor) => {
    let d = pixels.data;
    let adj = rgbColor[3];
    for (let i = 0; i < d.length; i += 4) {
      d[i] -= (d[i] - rgbColor[0]) * adj;
      d[i + 1] -= (d[i + 1] - rgbColor[1]) * adj;
      d[i + 2] -= (d[i + 2] - rgbColor[2]) * adj;
    }
    return pixels;
  };