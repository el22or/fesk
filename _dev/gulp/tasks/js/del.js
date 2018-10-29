'use strict';

var del = require('del');

module.exports = function (gulp, plugins, settings, handlers) {
  gulp.task('js:del', function (cb) {
    if (settings.debug) {
      console.log('js:del task...');
    }

    var deldir = function (err) {
      if (err) return cb(err);
      del([
        settings.path.theme.js + '/*',
      ], {
        force: true
      });
      cb();
    };

    return deldir();
  });
};
