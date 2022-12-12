// Gulp include
import gulp from "gulp";

// Plugins include
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import fonter from "gulp-fonter";
import ttf2woff2 from "gulp-ttf2woff2";
import newer from "gulp-newer";
import gulpIf from "gulp-if";

// Url include
import url from "../settings/url.js";

// option include
import option from "../settings/option.js";

// Font task
export default () => {
    return gulp.src(url.font.src)
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
    .pipe(gulp.dest(url.font.dest))
}