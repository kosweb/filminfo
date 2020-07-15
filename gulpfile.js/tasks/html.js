'use strict';

const cfg                 = require('../settings');
const { task, src, dest } = require('gulp');
const changed             = require('gulp-changed');
const htmlmin             = require('gulp-htmlmin');

// html minification
task('html', function () {
  let optionsHtmlmin = {
    collapseInlineTagWhitespace: true,
    collapseWhitespace: true,
    removeComments: true
  };

  return src(`${cfg.paths.src.root}*.html`)
    .pipe(changed(cfg.paths.dest.root))
    .pipe(htmlmin(optionsHtmlmin))
    .pipe(dest(cfg.paths.dest.root));
});
