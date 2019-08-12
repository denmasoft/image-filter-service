//based on https://github.com/girliemac/filterous-2
module.exports = (pixels, adj) => {
    let d = pixels.data;
    adj = (adj > 1) ? 1 : adj;
    adj = (adj < -1) ? -1 : adj;
    adj = ~~(255 * adj);
    for (let i = 0; i < d.length; i += 4) {
      d[i] += adj;
      d[i + 1] += adj;
      d[i + 2] += adj;
      }
      return pixels;
  };