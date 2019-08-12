//based on https://github.com/girliemac/filterous-2
// RGB Adjust
module.exports = (pixels, rgbAdj) => {
    let d = pixels.data;
    for (var i = 0; i < d.length; i +=4) {
      d[i] *= rgbAdj[0];		//R
      d[i + 1] *= rgbAdj[1];	//G
          d[i + 2] *= rgbAdj[2];	//B
      }
      return pixels;
  };