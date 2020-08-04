'use strict';

import { paths } from "../index";
import { task, src, dest } from "gulp";
import debug from "gulp-debug";

task("video", () => {
  return src(paths.video.src)
    .pipe(dest(paths.video.dist))
    .pipe(debug({
      title: "Video",
      showFiles: false
    }));
});
