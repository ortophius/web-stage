const through = require('through2');
const bemjson = require('html2bemjson')
const File = require('vinyl');

var PluginError = require('plugin-error');
var PLUGIN_NAME = 'gulp-html2bemjson';

module.exports = function() {
    return through.obj(function(file, encoding, callback) {
        if (file.isNull()) {
            return callback(null, file);
        }
        
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams not supported!'));
        } 
        
        else if (file.isBuffer()) {
            file.contents = Buffer.from(bemjson.stringify(file.contents.toString()));
            file.path = file.path.replace(/^(.*)\..*$/, '$1.bemjson.js');
            this.push(file)
        }
        
        callback();
    });
};