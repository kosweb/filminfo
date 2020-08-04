"use strict";

import { paths } from "../index";
import gulp from "gulp";
import gulpif from "gulp-if";
import rename from "gulp-rename";
import sass from "gulp-sass";
import sassGlob from "gulp-sass-glob";
import csso from "gulp-csso";
import sortMediaQueries from "postcss-sort-media-queries";
import postcss from "gulp-postcss";
import autoprefixer from "autoprefixer";
import sourcemaps from "gulp-sourcemaps";
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import beautyErr from "@wulechuan/printer-for-errors-of-gulp-plugins";
import browsersync from "browser-sync";
import debug from "gulp-debug";
import yargs from "yargs";

const argv = yargs.argv,
  production = !!argv.production;

const beautyErrCfg = {
  colorTheme: {
    heading: {
      lineColor: "magenta",
    },
  },
};

const pluginsPostcss = [autoprefixer(), sortMediaQueries({
  sort: 'mobile-first' // desktop-first
})];

gulp.task("styles", () => {
  return gulp.src(paths.styles.src)
    .pipe(gulpif(!production, sourcemaps.init()))
    .pipe(plumber({ errorHandler: function(err) {
      beautyErr(err, beautyErrCfg);
    }}))
    .pipe(sassGlob())
    .pipe(sass({outputStyle: "expanded"})
      .on("error", notify.onError("<%= error.message %>")))
    .pipe(postcss(pluginsPostcss))
    .pipe(csso({
      comments: false
    }))
    .pipe(gulpif(production, rename({
      suffix: ".min"
    })))
    .pipe(plumber.stop())
    .pipe(gulpif(!production, sourcemaps.write("./maps/")))
    .pipe(gulp.dest(paths.styles.dist))
    .pipe(debug({
      "title": "CSS files"
    }))
    .pipe(browsersync.stream());
});
