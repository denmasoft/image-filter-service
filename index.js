const DenmaFilter = require('./denmaFilter');
const fs = require('fs');
let denmaFilter = new DenmaFilter();
fs.readFile('a.png',function(err, buffer){

    denmaFilter.loadImage(buffer).filter('aden').output('aden.png');
});