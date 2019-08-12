//based on https://github.com/girliemac/filterous-2
// Convolute - weights are 3x3 matrix
module.exports = (pixels, weights) => {
    let side = Math.round(Math.sqrt(weights.length));
      let halfSide = ~~(side/2);
  
      let d = pixels.data;
      let sw = pixels.width;
      let sh = pixels.height;
  
      let w = sw;
      let h = sh;
  
      for (let y = 0; y < h; y++) {
          for (let x = 0; x < w; x++) {
            let sy = y;
            let sx = x;
            let dstOff = (y * w + x) * 4;
            let r = 0, g = 0, b = 0;
            for (let cy = 0; cy < side; cy++) {
            for (let cx = 0; cx < side; cx++) {
                let scy = sy + cy - halfSide;
            let scx = sx + cx - halfSide;
            if (scy >= 0 && scy < sh && scx >= 0 && scx < sw) {
                  let srcOff = (scy * sw + scx) * 4;
                  let wt = weights[cy * side + cx];
                  r += d[srcOff] * wt;
                  g += d[srcOff + 1] * wt;
                  b += d[srcOff + 2] * wt;
            }
            }
        }
        d[dstOff] = r;
        d[dstOff + 1] = g;
        d[dstOff + 2] = b;
      }
      }
      return pixels;
  }