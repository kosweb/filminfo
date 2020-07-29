'use strict';

const cfg                 = require('../settings');
const { task, src, dest } = require('gulp');
const changed             = require('gulp-changed');

// html minification
task('video', function () {
  return src(`${cfg.paths.src.root}/video/*.mp4`)
    .pipe(dest(`${cfg.paths.dest.root}/video`));
});
