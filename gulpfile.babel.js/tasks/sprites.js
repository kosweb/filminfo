"use strict";

import { paths } from "../index";
import gulp from "gulp";
import rename from "gulp-rename";
import svgstore from "gulp-svgstore";
import debug from "gulp-debug";
import browsersync from "browser-sync";

gulp.task("sprites", () => {
  return gulp.src(paths.sprites.src)
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(rename('svg-sprite.svg'))
    .pipe(gulp.dest(paths.sprites.dist))
    .pipe(debug({
      "title": "Sprites"
    }))
    .on("end", browsersync.reload);
});
