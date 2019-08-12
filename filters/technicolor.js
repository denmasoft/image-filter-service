module.exports = (pixels) => {
    let data = pixels.data;
    let iLen = data.length;
    let m = [
        1.91252,-0.85453,-0.09155,0,0.04624,
      -0.30878,1.76589,-0.10601,0,-0.27589,
      -0.23110,-0.75018,1.84759,0,0.12137,
      0,0,0,1,0
      ];
    let r, g, b, a, i, colorsOnly = true;
    for (i = 0; i < iLen; i += 4) {
        r = data[i];
        g = data[i + 1];
        b = data[i + 2];
        if (colorsOnly) {
          data[i] = r * m[0] + g * m[1] + b * m[2] + m[4] * 255;
          data[i + 1] = r * m[5] + g * m[6] + b * m[7] + m[9] * 255;
          data[i + 2] = r * m[10] + g * m[11] + b * m[12] + m[14] * 255;
        }
        else {
          a = data[i + 3];
          data[i] = r * m[0] + g * m[1] + b * m[2] + a * m[3] + m[4] * 255;
          data[i + 1] = r * m[5] + g * m[6] + b * m[7] + a * m[8] + m[9] * 255;
          data[i + 2] = r * m[10] + g * m[11] + b * m[12] + a * m[13] + m[14] * 255;
          data[i + 3] = r * m[15] + g * m[16] + b * m[17] + a * m[18] + m[19] * 255;
        }
      }
      return pixels;
  };