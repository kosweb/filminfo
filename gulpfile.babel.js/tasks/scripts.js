"use strict";

import { paths } from "../index";
// import webpack from "webpack";
// import webpackStream from "webpack-stream";
import concat from "gulp-concat";
import terser from "gulp-terser";
import gulp from "gulp";
import gulpif from "gulp-if";
import rename from "gulp-rename";
import browsersync from "browser-sync";
// import debug from "gulp-debug";
import yargs from "yargs";

// const webpackConfig = require("../webpack.config.js"),
//     argv = yargs.argv,
//     production = !!argv.production;

// webpackConfig.mode = production ? "production" : "development";
// webpackConfig.devtool = production ? false : "source-map";

const argv = yargs.argv,
    production = !!argv.production;

gulp.task("scripts", () => {
  return gulp.src(paths.scripts.src)
    // .pipe(webpackStream(webpackConfig), webpack)
    .pipe(gulpif(production, rename({
        suffix: ".min"
    })))
    .pipe(concat('index.js'))
    .pipe(terser())
    .pipe(gulp.dest(paths.scripts.dist))
    // .pipe(debug({
    //     "title": "JS files"
    // }))
    .on("end", browsersync.reload);
});


// task('scripts', function () {
//   return src(`${cfg.paths.src.scripts}**/*.js`)
//     .pipe(gulpIf(isDev, sourcemaps.init()))
//     .pipe(concat('index.js'))
//     .pipe(terser())
//     .pipe(gulpIf(isDev, sourcemaps.write()))
//     .pipe(rename({
//       suffix: '.min'
//     }))
//     .pipe(dest(cfg.paths.dest.scripts));
// });
