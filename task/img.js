// Gulp include
import gulp from "gulp";

// Plugins include
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import newer from "gulp-newer";
import imagemin from "gulp-imagemin";
import webp from "gulp-webp";
import gulpIf from "gulp-if";

// Url include
import url from "../settings/url.js";

// option include
import option from "../settings/option.js";

// Image task
export default () => {
    return gulp.src(url.img.src)
    .pipe(plumber({
        errorHandler: notify.onError( error => ({
            title: "IMAGE",
            message: error.message
        }))
    }))
    .pipe(newer(url.img.dest))
    .pipe(gulpIf(option.isP, imagemin({verbose: true})))
    .pipe(gulp.dest(url.img.dest))
    .pipe(webp())
    .pipe(gulp.dest(url.img.dest))
}