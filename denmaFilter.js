//based on https://github.com/girliemac/filterous-2
const fs = require('fs');
const Canvas = require('canvas');
const filters = require('./filters');

class DenmaFilter{
    constructor(){
        this.scale = 1;
        this.w = 300;
        this.h = 300;
    }
    putImageData(pixels){
        this.ctx.putImageData(pixels, 0, 0);
    }
    loadImage(image){
        let img = new Canvas.Image();
        img.onload = () => {
            this.w = img.width * this.scale;
            this.h = img.height * this.scale;
            this.canvas = Canvas.createCanvas(this.w, this.h);
            this.ctx = this.canvas.getContext('2d');
            this.ctx.drawImage(img, 0, 0, this.w, this.h);
        };
        img.src = image;
        return this;
    }
    filter(effect, adjustment){
        let newPixels;
        let p = new Promise((resolve) => {
            console.log(filters[effect]);
          this.pixels = this.ctx.getImageData(0, 0, this.w, this.h);
          newPixels = filters[effect].apply(this, [this.pixels, adjustment]);
          resolve(newPixels);
        });
        p.then(this.putImageData(newPixels));
        return this;
    }
    /*filter(filterName) {
        filterName = filterName.toLowerCase();
        let newPixels;
        console.log(filters[filterName][filterName]);
        let p = new Promise((resolve) => {
          this.pixels = this.ctx.getImageData(0, 0, this.w, this.h);
          newPixels = filters[filterName][filterName].apply(this, [this.pixels]);
          resolve(newPixels);
        });
        if(filterName === 'mayfair' || filterName === 'rise' || filterName === 'hudson' || filterName === 'xpro2' || filterName === 'amaro' || filterName === 'earlybird' || filterName === 'sutro' || filterName == 'toaster' || filterName === 'brannan') {
          let p1 = new Promise((resolve) => {
            p.then(this.putImageData(newPixels));
            resolve();
          });
        } else {
          p.then(this.putImageData(newPixels));
        }
        return this;
    }*/
    output(filename){
        let type = 'image/png';
        this.canvas.toDataURL(type, function(err, base64) {
          let base64Data = base64.split(',')[1];
          let binaryData = new Buffer(base64Data, 'base64');
          fs.writeFile(filename, base64Data, {encoding: 'base64'}, (err) => {
            if(err) return console.log(err);
            console.log('Saved as ' + filename);
          });
        });
        return this;
    }
};
module.exports = DenmaFilter;