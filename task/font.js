// Gulp include
const {src,dest} = require("gulp");

// Plugins include
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const fonter = require("gulp-fonter");
const ttf2woff2 = require("gulp-ttf2woff2");
const newer = require("gulp-newer");
const gulpIf = require("gulp-if");

// Url include
const url = require("../settings/url.js");

// option include
const option = require("../settings/option.js");

// Font task
const font = () => {
    return src(url.font.src)
    .pipe(plumber({
        errorHandler: notify.onError( error => ({
            title: "FONT",
            message: error.message
        }))
    }))
    .pipe(newer(url.font.src))
    .pipe(gulpIf(option.isP, fonter({formats: ["ttf","eot","woff"]})))
    .pipe(newer(url.font.dest))
    .pipe(ttf2woff2())
    .pipe(dest(url.font.dest))
}

module.exports = font;