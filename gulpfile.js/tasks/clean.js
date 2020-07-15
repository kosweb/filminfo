'use strict';

const settings = require('../settings');
const { task } = require('gulp');
const del = require('del');

// delete build dir
task('clean', function () {
  return del(settings.paths.dest.root);
});
