// Gulp include
import gulp from "gulp";

// Url include
import url from "../settings/url.js";

// Option include
// import option from "../settings/option.js";

// Plugns
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import size from "gulp-size";
import webpCss from "gulp-webp-css";
import csso from "gulp-csso";
import rename from "gulp-rename";
import autoprefixer from "gulp-autoprefixer";
import cssimport from "gulp-cssimport";
import concat from "gulp-concat";

// Css task
export default () => {
  return gulp.src(url.css.src,{sourcemaps: true})
  .pipe(plumber({
    errorHandler: notify.onError(error => ({
      title: "CSS",
      message: error.message
    }))
  }))
  .pipe(autoprefixer())
  .pipe(cssimport())
  .pipe(webpCss())
  .pipe(concat("main.css"))
  .pipe(gulp.dest(url.css.dest,{sourcemaps: true}))
  .pipe(size({
    title: ".css"
  }))
  .pipe(csso())
  .pipe(size({
    title: ".css->.min"
  }))
  .pipe(rename({
    suffix: ".min"
  }))
  .pipe(gulp.dest(url.css.dest,{sourcemaps: true}))
}