// Gulp include
const {src,dest} = require("gulp");

// Plugins
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const size = require("gulp-size");
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const autoprefixer = require("gulp-autoprefixer");
const sass = require('gulp-sass')(require('sass'))
const gulpIf = require("gulp-if");
const sassGlob = require("gulp-sass-glob");
const nodeSassImporter = require("node-sass-tilde-importer");

// Url include
const url = require("../settings/url.js");

// option include
const option = require("../settings/option.js");

// Css task
const scss = () => {
    return src(url.scss.src,{ sourcemaps: true })
    .pipe(plumber({
        errorHandler: notify.onError( error => ({
            title: "SCSS",
            message: error.message
        }))
    }))
    .pipe(sassGlob())
    .pipe(sass({
        importer: nodeSassImporter
    }))
    .pipe(gulpIf(option.isP, autoprefixer()))
    .pipe(dest(url.scss.dest,{ sourcemaps: true }))
    .pipe(size({
        title: ".scss"
    }))
    .pipe(gulpIf(option.isP, csso()))
    .pipe(size({
        title: ".scss->min.css"
    }))
    .pipe(rename({
        suffix: ".min"
    }))
    .pipe(dest(url.scss.dest,{ sourcemaps: true }))
}

module.exports = scss;