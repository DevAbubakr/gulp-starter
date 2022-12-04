// Gulp include
const {src,dest} = require("gulp");

// plugins include
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const jsmin = require('gulp-jsmin');
const rename = require("gulp-rename")
const webpack = require("webpack-stream")
const gulpIf = require("gulp-if");

// url include
const url = require('../settings/url.js')

// option include
const option = require("../settings/option.js");

// js task
const javaScript = () => {
  return src(url.js.src)
  .pipe(plumber({
    errorHandler: notify.onError( error => ({
        title: "JS",
        message: error.message
    }))
  }))
  .pipe(webpack({
    mode: option.isP ? "production" : "development"
  }))
  // .pipe(gulpIf(option.isP, jsmin()))
  .pipe(rename({suffix: '.min'}))
  .pipe(dest(url.js.dest));
}

module.exports = javaScript;