// Gulp include
import gulp from "gulp";

// plugins include
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import webpHtml from "gulp-webp-html";
import pug from "gulp-pug";
import pugGlob from "pug-include-glob";

// url include
import url from '../settings/url.js'

// option include
import option from "../settings/option.js";

// Pug task
export default () => {
  return gulp.src(url.pug.src)
  .pipe(plumber({
    errorHandler: notify.onError(error => ({
      title: "PUG",
      message: error.message
    }))
  }))
  .pipe(pug({
    pretty: option.isD,
    plugins: [pugGlob()]
  }))
  .pipe(webpHtml())
  .pipe(gulp.dest(url.pug.dest))
}