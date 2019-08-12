//based on https://github.com/girliemac/filterous-2
// No adjustment
module.exports = (pixels, adj) => {
    let d = pixels.data;
    for (let i = 0; i < d.length; i += 4) {
      d[i] = 255 - d[i];
      d[i + 1] = 255 - d[i + 1];
      d[i + 2] = 255 - d[i + 2];
    }
    return pixels;
   };