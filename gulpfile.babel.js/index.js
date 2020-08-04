"use strict";

import gulp from "gulp";

const requireDir = require("require-dir"),
    paths = {
        views: {
            src: [
                "./source/*.html"
            ],
            dist: "./build/",
            watch: [
                "./source/*.html"
            ]
        },
        styles: {
            src: "./source/styles/style.scss",
            dist: "./build/css/",
            watch: [
                "./source/styles/**/*.scss"
            ]
        },
        scripts: {
            src: "./source/js/**/*.js",
            dist: "./build/js/",
            watch: [
                "./source/js/**/*.js"
            ]
        },
        images: {
            src: [
                "./source/img/**/*.{jpg,jpeg,png,gif,tiff,svg}",
                "!./source/img/favicon/*.{jpg,jpeg,png,gif,tiff}",
                "!./source/img/icons/*.{jpg,png,svg}"
            ],
            dist: "./build/img/",
            watch: "./source/img/**/*.{jpg,jpeg,png,gif,svg,tiff}"
        },
        webp: {
            src: [
                "./source/img/**/*.{jpg,jpeg,png,tiff}",
                "!./source/img/favicon/*.{jpg,jpeg,png,gif,tiff}"
            ],
            dist: "./build/img/",
            watch: [
                "./source/img/**/*.{jpg,jpeg,png,tiff}",
                "!./source/img/favicon/*.{jpg,jpeg,png,gif,tiff}"
            ]
        },
        sprites: {
            src: "./source/img/icons/*.svg",
            dist: "./build/img/",
            watch: "./source/img/icons/*.svg"
        },
        fonts: {
            src: "./source/fonts/**/*.{woff,woff2}",
            dist: "./build/fonts/",
            watch: "./source/fonts/**/*.{woff,woff2}"
        },
        favicons: {
            src: "./source/img/favicon/*.{jpg,jpeg,png,gif}",
            dist: "./build/img/favicons/",
        },
        video: {
            src: "./source/video/*mp4",
            dist: "./build/video"
        }
    };

requireDir("./tasks/");

export { paths };

export const development = gulp.series("clean",
    gulp.parallel(["html", "styles", "scripts", "images", "webp", "sprites", "fonts", "video"]),
    gulp.parallel("serve"));

export const prod = gulp.series("clean",
    gulp.series(["html", "styles", "scripts", "images", "webp", "sprites", "fonts", "favicons"]));

export default development;
