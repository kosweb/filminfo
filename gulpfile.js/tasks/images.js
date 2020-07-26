'use strict';

const cfg                 = require('../settings');
const { task, src, dest } = require('gulp');
const gulpIf              = require('gulp-if');
const changed             = require('gulp-changed');
const imagemin            = require('gulp-imagemin');
const imageminJpegoptim   = require('imagemin-jpegoptim');

const isProd              = !!process.env.NODE_ENV;

// Image optimization
task('images', function () {
  let pluginsSvgo = [
    { removeViewBox: false },
    { removeTitle: true },
    { cleanupNumericValues: { floatPrecision: 1 } }
  ];

  let pluginsImagemin = [
    imagemin.optipng(),
    imagemin.svgo({ plugins: pluginsSvgo }),
    imageminJpegoptim({
      max: 90,
      progressive: true
    })
  ];

  return src([
    `${cfg.paths.src.images.all}**/*.{jpg,png,svg}`,
    `!${cfg.paths.src.images.icons}*.{jpg,png,svg}`
  ])
    .pipe(changed(cfg.paths.dest.images.all))
    .pipe(gulpIf(isProd, imagemin(pluginsImagemin)))
    .pipe(dest(cfg.paths.dest.images.all));
});
