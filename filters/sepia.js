//based on https://github.com/girliemac/filterous-2
module.exports = (pixels, adj) => {
    let d = pixels.data;
    for (let i = 0; i < d.length; i += 4) {
      let r = d[i], g = d[i + 1], b = d[i + 2];
      d[i] = (r * (1 - (0.607 * adj))) + (g * .769 * adj) + (b * .189 * adj);
      d[i + 1] = (r * .349 * adj) + (g * (1 - (0.314 * adj))) + (b * .168 * adj);
          d[i + 2] = (r * .272 * adj) + (g * .534 * adj) + (b * (1 - (0.869 * adj)));
      }
      return pixels;
  };