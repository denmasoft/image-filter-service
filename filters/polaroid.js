module.exports = (pixels) => {
    let data = pixels.data;
    let iLen = data.length;
    let m = [
      1.438,-0.062,-0.062,0,0,
      -0.122,1.378,-0.122,0,0,
      -0.016,-0.016,1.483,0,0,
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