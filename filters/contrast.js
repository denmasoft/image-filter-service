//based on https://github.com/girliemac/filterous-2
// Contrast - the adj value should be -1 to 1
module.exports = (pixels, adj) => {
    adj *= 255;
    let d = pixels.data;
    let factor = (259 * (adj + 255)) / (255 * (259 - adj));
    for (let i = 0; i < d.length; i += 4) {
      d[i] = factor * (d[i] - 128) + 128;
      d[i + 1] = factor * (d[i + 1] - 128) + 128;
      d[i + 2] = factor * (d[i + 2] - 128) + 128;
    }
    return pixels;
  };
  