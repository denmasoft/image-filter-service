//based on https://github.com/girliemac/filterous-2
module.exports = (pixels) => {
    let d = pixels.data;
    for (let i = 0; i < d.length; i += 4) {
      let r = d[i], g = d[i + 1], b = d[i + 2];
      let avg = 0.2126*r + 0.7152*g + 0.0722*b;
      d[i] = d[i + 1] = d[i + 2] = avg
    }
    return pixels;
  };