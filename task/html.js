// Gulp include
import gulp from "gulp";

// Url include
import url from "../settings/url.js";

// Option include
import option from "../settings/option.js";

// Plugns
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import size from "gulp-size";
import htmlMin from "gulp-htmlmin";
import fileInclude from "gulp-file-include";
import webpHtml from "gulp-webp-html";

// Html task
export default () => {
  return gulp.src(url.html.src)
  .pipe(plumber({
    errorHandler: notify.onError(error => ({
      title: "HTML",
      message: error.message
    }))
  }))
  .pipe(fileInclude())
  .pipe(webpHtml())
  .pipe(size({
    title: ".html"
  }))
  .pipe(htmlMin(option.htmlMin))
  .pipe(size({
    title: ".html->min"
  }))
  .pipe(gulp.dest(url.html.dest))
}