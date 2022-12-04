// Gulp include
const {watch, series, parallel} = require("gulp");

// server include
const browserSync = require("browser-sync").create();

// url
const url = require("./settings/url.js");

// option
const option = require("./settings/option.js");

// clear 
const clear = require("./task/clear.js")

// img
const img = require("./task/img.js");

// pug
const pug = require("./task/pug.js");

// sass
const scss = require("./task/scss.js")

// script
const javaScript = require("./task/script.js");

// font 
const font = require("./task/font.js")

// watching
const watching = () => {
  // watch("/html/**/*.html",html).on("all", browserSync.reload)
  // watch(url.css.src,css)
  watch(url.img.watch,img).on("all", browserSync.reload)
  watch(url.pug.watch,pug).on("all", browserSync.reload)
  watch(url.scss.watch,scss).on("all", browserSync.reload)
  watch(url.js.watch,javaScript).on("all", browserSync.reload)
  watch(url.font.watch,font).on("all", browserSync.reload)
}

// sever
const server = () => {
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  })
}

// bild
const build = series(
  clear,
  parallel(img,pug,javaScript,scss,font),
)

// dev
const dev = series (
  build,
  parallel(watching,server)
)

// comands
exports.default = option.isP
  ? build
  : dev;