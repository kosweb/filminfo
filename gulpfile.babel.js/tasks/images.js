"use strict";

import { paths } from "../index";
import gulp from "gulp";
import gulpif from "gulp-if";
import imagemin from "gulp-imagemin";
// import debug from "gulp-debug";
import browsersync from "browser-sync";
import yargs from "yargs";

const argv = yargs.argv,
  production = !!argv.production;

const pluginsSvgo = [
  { removeViewBox: false },
  { removeTitle: true },
  { cleanupNumericValues: { floatPrecision: 1 } }
];

const pluginsImagemin = [
  imagemin.optipng(),
  imagemin.svgo({ plugins: pluginsSvgo }),
  imagemin.mozjpeg({
    quality: 20,
    progressive: true
  })
];

gulp.task("images", () => {
  return gulp.src(paths.images.src)
    // .pipe(gulpif(production, imagemin(pluginsImagemin)))
    .pipe(gulp.dest(paths.images.dist))
    // .pipe(debug({
    //     "title": "Images"
    // }))
    .on("end", browsersync.reload);
});
