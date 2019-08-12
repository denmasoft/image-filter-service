//based on https://github.com/girliemac/filterous-2
// perceived saturation (faster) - adj should be -1 (desaturated) to positive number. 0 is unchanged
module.exports = (pixels, adj) => {
    let d = pixels.data;
    adj = (adj < -1) ? -1 : adj;
    for (let i = 0; i < d.length; i += 4) {
      let r = d[i], g = d[i + 1], b = d[i + 2];
      let gray = 0.2989*r + 0.5870*g + 0.1140*b; //weights from CCIR 601 spec
      d[i] = -gray * adj + d[i] * (1 + adj);
      d[i + 1] = -gray * adj + d[i + 1] * (1 + adj);
      d[i + 2] = -gray * adj + d[i + 2] * (1 + adj);
    }
      return pixels;
  };