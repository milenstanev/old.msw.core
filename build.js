const fs = require('fs');
const Builder = require('systemjs-builder');

const builder = new Builder('./', './config.js');

builder
    .buildStatic('default/core.js', 'default/core-bundle.js', { minify: true, sourceMaps: false })
    .then(function() {
        console.log('Build complete');
    })
    .catch(function(err) {
        console.log('Build error');
        console.log(err);
    });
