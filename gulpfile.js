// Gulp include
import gulp from "gulp";

// Browser-sync include
import browserSync from "browser-sync";

// Url include
import url from "./settings/url.js";

// Option include
import option from "./settings/option.js";

// Del include
import clear from "./task/clear.js";

// html include
// import html from "./task/pug.js";

// css include
// import css from "./task/scss.js";

// Pug include
import pug from "./task/pug.js";

// Scss include
import scss from "./task/scss.js";

// Image include
import img from "./task/img.js";

// Font include
import font from "./task/font.js";

// Js include
import script from "./task/script.js";

// watching
const watching = () => {
  // gulp.watch(url.html.watch,img).on("all", browserSync.reload)
  // gulp.watch(url.css.watch,pug).on("all", browserSync.reload)
  gulp.watch(url.img.watch,img).on("all", browserSync.reload)
  gulp.watch(url.pug.watch,pug).on("all", browserSync.reload)
  gulp.watch(url.scss.watch,scss).on("all", browserSync.reload)
  gulp.watch(url.js.watch,script).on("all", browserSync.reload)
  gulp.watch(url.font.watch,font).on("all", browserSync.reload)
}

// Server
const server = () => {
  browserSync.init({
      server: {
          baseDir: url.ready
      }
  })
}

const webFonts = () => {
  return gulp.src(["./node_modules/@fortawesome/fontawesome-free/webfonts/*{ttf,woff2}","./node_modules/bootstrap-icons/font/fonts/*.{woff,woff2,ttf}"])
  .pipe(gulp.dest(url.ready + "/font"))
}

// Build command
// bild
const build = gulp.series(
  clear,
  gulp.parallel(img,pug,script,scss,font,webFonts),
)

// dev
const dev = gulp.series (
  build,
  gulp.parallel(watching,server)
)

// comands
export default option.isP
  ? build
  : dev;