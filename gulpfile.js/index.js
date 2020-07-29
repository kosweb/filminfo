'use strict';

require('require-dir')('./tasks');

const { task, series, parallel } = require('gulp');

task(
  'build',
  series(
    'clean',
    parallel('fonts', 'html', 'styles', 'scripts', 'images', 'webp', 'icons', 'video')
  )
);

task('default', series('build', 'server', 'watch'));
