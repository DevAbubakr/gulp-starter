// Gulp include
import gulp from "gulp";

// plugins include
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import jsmin from 'gulp-jsmin';
import rename from "gulp-rename"
import webpack from "webpack-stream";
import gulpIf from "gulp-if";

// url include
import url from '../settings/url.js'

// option include
import option from "../settings/option.js";

// js task
export default () => {
  return gulp.src(url.js.src)
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
  .pipe(gulp.dest(url.js.dest));
}