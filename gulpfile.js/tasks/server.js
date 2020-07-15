'use strict';

const cfg         = require('../settings');
const { task }    = require('gulp');
const browserSync = require('browser-sync').create('Local Server');

// local server
task('server', function (done) {
  browserSync.init({
    server: cfg.paths.dest.root,
    cors: true,
    reloadOnRestart: true,
    ghostMode: false,
		open: true,
		port: 6969,
    ui: false,
  });

  done();
});
