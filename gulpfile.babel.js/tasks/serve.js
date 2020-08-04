"use strict";

import { paths } from "../index";
import gulp from "gulp";
import browsersync from "browser-sync";

gulp.task("serve", () => {
  browsersync.init({
    server: "./build/",
    notify: true,
    ghostMode: false,
    open: true,
    port: 6969,
    ui: false
  });

  gulp.watch(paths.views.watch, gulp.parallel("html"));
  gulp.watch(paths.styles.watch, gulp.parallel("styles"));
  gulp.watch(paths.scripts.watch, gulp.parallel("scripts"));
  gulp.watch(paths.sprites.watch, gulp.parallel("sprites"));
  gulp.watch(paths.images.watch, gulp.parallel("images"));
  gulp.watch(paths.webp.watch, gulp.parallel("webp"));
  gulp.watch(paths.fonts.watch, gulp.parallel("fonts"));
});
