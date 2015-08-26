'use strict';

var gutil = require('gulp-util');
var through = require('through2');
var path = require('path');

var PLUGIN_NAME = 'gulp-psd2png';

//////////////////////////////
// Main PSD2PNG function
//////////////////////////////
var psd2png = function psd2png(options, sync) {
    return through.obj(function (file, enc, cb) {
        var opts,
            filePush,
            errorM,
            callback,
            result;

        if (file.isNull()) {
            return cb(null, file);
        }
        if (file.isStream()) {
            return cb(new gutil.PluginError(PLUGIN_NAME, 'Streaming not supported'));
        }
        if (path.basename(file.path).indexOf('_') === 0) {
            return cb();
        }
        if (!file.contents.length) {
            return cb(null, file);
        }
        cb();
    },
    function (cb) {
        cb();
        done();
    });
};

module.exports = psd2png;