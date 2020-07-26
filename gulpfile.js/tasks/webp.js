'use strict';

const cfg                 = require('../settings');
const { task, src, dest } = require('gulp');
const rename              = require('gulp-rename');
const changed             = require('gulp-changed');
const imagemin            = require('gulp-imagemin');
const imageminWebp        = require('imagemin-webp');

// convert images to webp
task('webp', function () {
  return src(`${cfg.paths.src.images.content}**/*.{jpg,png}`)
    .pipe(changed(cfg.paths.dest.images.content))
    .pipe(imagemin([imageminWebp({
      quality: 90
    })]))
    .pipe(rename({
      extname: '.webp'
    }))
    .pipe(dest(cfg.paths.dest.images.content));
});
