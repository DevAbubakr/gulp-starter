// Gulp include
const {src,dest} = require("gulp");

// Plugins include
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const newer = require("gulp-newer");
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
const gulpIf = require("gulp-if");

// Url include
const url = require("../settings/url.js");

// option include
const option = require("../settings/option.js");

// Image task
const image = () => {
    return src(url.img.src)
    .pipe(plumber({
        errorHandler: notify.onError( error => ({
            title: "IMAGE",
            message: error.message
        }))
    }))
    .pipe(newer(url.img.dest))
    .pipe(gulpIf(option.isP, imagemin({verbose: true})))
    .pipe(dest(url.img.dest))
    .pipe(webp())
    .pipe(dest(url.img.dest))
}

module.exports = image;