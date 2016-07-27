/**
 * @file fis3-parse-rem
 * @author ienix(ienix@foxmail.com)
 *
 * @since 16/5/26
 */

"use strict";

var through2 = require('through2');
var gutil = require('gulp-util');

var rem = require('./bin/main.js');

var entry = module.exports = function (content, file, conf) {


    return through2.obj(function(file) {
        if (file.isNull()) {
            return cb(null, file);
        }

        if (file.isStream()) {
            new gutil.PluginError('gulp-rem', 'Streaming not supported');
        }

        var content = file.contents.toString('utf8');

        file.contents = rem(content, file, conf);
        this.push(file);
    });
};

entry.defaultOptions = {
    rem: 18,
    min: 3,
    dpr: 2,
    exclude: [
        'background', 'background-size'
    ]
};
