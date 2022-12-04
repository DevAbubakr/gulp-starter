const urlSrc = "./app";
const ulrDest = "./dist";

module.exports = {
  ready: ulrDest,
  html: {
    src: urlSrc + "/html/*.html",
    watch: urlSrc + "/html/**/*.html",
    dest: ulrDest
  },

  pug: {
    src: urlSrc + "/pug/*.pug",
    watch: urlSrc + "/pug/**/*.pug",
    dest: ulrDest
  },

  css: {
    src: urlSrc + "/css/*.css",
    watch: urlSrc + "/css/**/*.css",
    dest: ulrDest + '/css/'
  },

  scss: {
    src: urlSrc + "/scss/*.{scss,sass}",
    watch: urlSrc + "/scss/**/*.{scss,sass}",
    dest: ulrDest + '/css/'
  },

  js: {
    src: urlSrc + "/js/*.js",
    watch: urlSrc + "/js/**/*.js",
    dest: ulrDest + '/js/'
  },

  img: {
    src: urlSrc + "/img/*.{png,jpg,svg,gif,ico}",
    watch: urlSrc + "/img/**/*.{png,jpg,jpeg,svg,gif,ico,webp}",
    dest: ulrDest + '/img/'
  },

  font: {
    src: urlSrc + "/font/*.{ttf,otf,eot,woff,woff2,svg}",
    watch: urlSrc + "/font/**/*.{ttf,atf,eot,woff,woff2,svg}",
    dest: ulrDest + '/font/'
  },
}