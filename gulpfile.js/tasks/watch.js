'use strict';

const cfg                     = require('../settings');
const { task, series, watch } = require('gulp');
const browserSync             = require('browser-sync').get('Local Server');

task('watch', function () {
  watch(`${cfg.paths.src.root}*.html`).on(
    'all',
    series('html', browserSync.reload)
  );

  watch(`${cfg.paths.src.styles}**/*.scss`).on('all', series('styles'));

  watch(`${cfg.paths.src.scripts}**/*.js`).on(
    'all',
    series('scripts', browserSync.reload)
  );

  watch([
    `${cfg.paths.src.images.all}**/*.{jpg,png,svg}`,
    `!${cfg.paths.src.images.icons}**/*.{jpg,png,svg}`
  ]).on('all', series('images', browserSync.reload));
  watch(`${cfg.paths.src.images.icons}**/*.svg`).on(
    'all',
    series('icons', browserSync.reload)
  );
  watch(`${cfg.paths.src.images.content}**/*.{jpg,png}`).on(
    'all',
    series('webp', browserSync.reload)
  );

  watch(`${cfg.paths.src.fonts}**/*.{woff,woff2}`).on(
    'all',
    series('fonts', browserSync.reload)
  );
});
