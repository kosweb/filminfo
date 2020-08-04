"use strict";

import { paths } from "../index";
import gulp from "gulp";
import gulpif from "gulp-if";
import imagemin from "gulp-imagemin";
import imageminWebp from "imagemin-webp";
// import webp from "gulp-webp";
import rename from "gulp-rename";
import debug from "gulp-debug";
import browsersync from "browser-sync";
import yargs from "yargs";

const argv = yargs.argv,
    production = !!argv.production;

gulp.task("webp", () => {
    return gulp.src(paths.webp.src)
        .pipe(imagemin([imageminWebp({
          quality: 90
        })]))
        .pipe(rename({
          extname: '.webp'
        }))
        // .pipe(debug({
        //     "title": "Images"
        // }))
        .pipe(gulp.dest(paths.webp.dist))
        // .pipe(webp(gulpif(production, imageminWebp({
        //     lossless: true,
        //     quality: 100,
        //     alphaQuality: 100
        // }))))
        // .pipe(gulp.dest(paths.webp.dist))
        // .pipe(debug({
        //     "title": "Images"
        // }))
        // .on("end", browsersync.reload);
});
