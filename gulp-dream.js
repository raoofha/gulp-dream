var through = require('through2');
var dream = require('dream-lang');
var gutil = require('gulp-util');
var path = require('path');
var merge = require('merge');

module.exports = function (opt) {
  function transform(file, enc, cb) {
    if (file.isNull()) return cb(null, file);
    if (file.isStream()) return cb(new gutil.PluginError('gulp-dream', 'Streaming not supported'));

    var data;
    var str = file.contents.toString('utf8');
    var dest = gutil.replaceExtension(file.path, '.js');

    var options = merge({
      module: true  
    }, opt);

    try {
      data = dream.compile(str, options);
    } catch (err) {
      return cb(new gutil.PluginError('gulp-dream', err));
    }

    file.contents = new Buffer(data);

    file.path = dest;
    cb(null, file);
  }

  return through.obj(transform);
};
