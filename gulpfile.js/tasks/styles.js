'use strict';

const cfg                 = require('../settings');
const { task, src, dest } = require('gulp');
const gulpIf              = require('gulp-if');
const plumber             = require('gulp-plumber');
const notify              = require("gulp-notify");
const beautyErr           = require("@wulechuan/printer-for-errors-of-gulp-plugins");
const rename              = require('gulp-rename');
const sourcemaps          = require('gulp-sourcemaps');
const gulpWait            = require('gulp-wait');
const sass                = require('gulp-sass');
const sassGlob            = require('gulp-sass-glob');
const postcss             = require('gulp-postcss');
const autoprefixer        = require('autoprefixer');
const mqpacker            = require('css-mqpacker');
const csso                = require('gulp-csso');
const browserSync         = require('browser-sync').get('Local Server');

const isDev               = !process.env.NODE_ENV;

const beautyErrCfg = {
  colorTheme: {
    heading: {
      lineColor: "magenta",
    },
  },
};

// sass compile
task('styles', function () {
  let pluginsPostcss = [autoprefixer(), mqpacker({
    sort: true
  })];

  return src(`${cfg.paths.src.styles}style.scss`)
    .pipe(gulpIf(isDev, sourcemaps.init()))
    .pipe(plumber({ errorHandler: function(err) {
      beautyErr(err, beautyErrCfg);
		}}))
    .pipe(sassGlob())
    .pipe(gulpWait(200))
    .pipe(sass({outputStyle: "expanded"})
      .on("error", notify.onError("<%= error.message %>")))
    .pipe(postcss(pluginsPostcss))
    .pipe(csso({
      comments: false
    }))
    .pipe(gulpIf(isDev, sourcemaps.write()))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(dest(cfg.paths.dest.styles))
    .pipe(gulpIf(isDev, browserSync.stream()));
});
