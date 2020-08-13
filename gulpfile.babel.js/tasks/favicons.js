"use strict";

import { task, src, dest } from "gulp";
import realFavicon         from "gulp-real-favicon";
import fs                  from "fs";
import gulpif                    from "gulp-if";
import debug               from "gulp-debug";

const FAVICON_DATA_FILE = `${cfg.src.images.favicons}/faviconData.json`;

// function favicons() {
//   return src(cfg.src.images.favicons)
//     .pipe(favs({
//       icons: {
//         appleIcon: true,
//         favicons: true,
//         online: false,
//         appleStartup: false,
//         android: false,
//         firefox: false,
//         yandex: false,
//         windows: false,
//         coast: false
//       }
//     }))
//     .pipe(dest(cfg.build.images))
//     .pipe(gulpif(cfg.debug, debug({title: 'favicons:'})))
// }

// task(favicons);

// Generate the icons. This task takes a few seconds to complete.
// You should run it at least once to create the icons. Then,
// you should run it whenever RealFaviconGenerator updates its
// package (see the check-for-favicon-update task below).
task('favicons-generate', function(done) {
	realFavicon.generateFavicon({
		masterPicture: cfg.src.images.favicon,
		dest: cfg.src.images.favicons,
		iconsPath: './img/favicons/',
		design: {
			ios: {
				pictureAspect: 'noChange',
				assets: {
					ios6AndPriorIcons: false,
					ios7AndLaterIcons: false,
					precomposedIcons: false,
					declareOnlyDefaultIcon: true
				}
			},
			desktopBrowser: {
				design: 'raw'
			},
			windows: {
				pictureAspect: 'noChange',
				backgroundColor: '#da532c',
				onConflict: 'override',
				assets: {
					windows80Ie10Tile: false,
					windows10Ie11EdgeTiles: {
						small: false,
						medium: true,
						big: false,
						rectangle: false
					}
				}
			},
			androidChrome: {
				pictureAspect: 'noChange',
				themeColor: '#ffffff',
				manifest: {
					display: 'standalone',
					orientation: 'notSet',
					onConflict: 'override',
					declared: true
				},
				assets: {
					legacyIcon: false,
					lowResolutionIcons: false
				}
			},
			safariPinnedTab: {
				pictureAspect: 'blackAndWhite',
				threshold: 33.59375,
				themeColor: '#5bbad5'
			}
		},
		settings: {
			scalingAlgorithm: 'Mitchell',
			errorOnImageTooSmall: false,
			readmeFile: false,
			htmlCodeFile: false,
			usePathAsIs: false
		},
		markupFile: FAVICON_DATA_FILE
	}, function() {
		done();
	});
});

task('favicons-inject-markups', function() {
	return src(cfg.src.html)
		.pipe(realFavicon.injectFaviconMarkups(JSON.parse(fs.readFileSync(FAVICON_DATA_FILE)).favicon.html_code))
		.pipe(dest(cfg.src.root));
});

// Check for updates on RealFaviconGenerator (think: Apple has just
// released a new Touch icon along with the latest version of iOS).
// Run this task from time to time. Ideally, make it part of your
// continuous integration system.
task('favicons-check-for-update', function(done) {
	const currentVersion = JSON.parse(fs.readFileSync(FAVICON_DATA_FILE)).version;
	realFavicon.checkForUpdates(currentVersion, function(err) {
		if (err) {
			throw err;
		}
	});
});
