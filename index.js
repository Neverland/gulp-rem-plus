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
var defaultOptions = {
    rem: 18,
    min: 3,
    dpr: 2,
    exclude: [
        'background', 'background-size'
    ]
};

var entry = module.exports = function (content, file, conf) {
    conf = Object.assign({}, defaultOptions, conf);

    return through2.obj(function(file, enc, cb) {
        if (file.isNull()) {
            new gutil.PluginError('gulp-rem-plus', 'no file!');
        }

        var content = file.contents.toString('utf8');
        var result = rem(content, file, conf);

        file.contents = new Buffer(result);

       cb(null, file);
    });
};
