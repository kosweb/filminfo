'use strict';

const cfg                 = require('../settings');
const { task, src, dest } = require('gulp');
const gulpIf              = require('gulp-if');
const concat              = require('gulp-concat');
const rename              = require('gulp-rename');
const sourcemaps          = require('gulp-sourcemaps');
const terser              = require('gulp-terser');

const isDev               = !process.env.NODE_ENV;

// js scripts minification
task('scripts', function () {
  return src(`${cfg.paths.src.scripts}**/*.js`)
    .pipe(gulpIf(isDev, sourcemaps.init()))
    .pipe(concat('index.js'))
    .pipe(terser())
    .pipe(gulpIf(isDev, sourcemaps.write()))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(dest(cfg.paths.dest.scripts));
});
