const fs = require ('fs');
const browserify = require ('browserify');

const {name, module: inFile, main: outFile} = require ('../package.json');

const browserifyOpts = {
    
    standalone: name
    
};

const babelOpts = {
    presets: [['env', {
        targets: {
            uglify: true
        }
    }]]
};

browserify (inFile, browserifyOpts)
    .transform ('babelify', babelOpts)
    .bundle ()
    .pipe (fs.createWriteStream (outFile));
