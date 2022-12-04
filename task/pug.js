// Gulp include
const {src,dest} = require("gulp");

// plugins include
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const gulpPug = require("gulp-pug")
const gulpIf = require("gulp-if");

// url include
const url = require('../settings/url.js')

// option include
const option = require("../settings/option.js");

// Pug task
const pug = () => {
  return src(url.pug.src)
  .pipe(plumber({
    errorHandler: notify.onError( error => ({
        title: "PUG",
        message: error.message
    }))
  }))
  .pipe(gulpPug(option.gulpPug))
  .pipe(dest(url.pug.dest))
}

module.exports = pug;