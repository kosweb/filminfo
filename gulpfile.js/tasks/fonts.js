'use strict';

const cfg                        = require('../settings');
const { task, src, dest }        = require('gulp');
const changed                    = require('gulp-changed');

// copy fonts
task('fonts', function () {
  return src(`${cfg.paths.src.fonts}**/*.{woff,woff2}`)
    .pipe(changed(cfg.paths.dest.fonts))
    .pipe(dest(cfg.paths.dest.fonts));
});
