const isP = process.argv.includes("--production")
const isD = !isP;

module.exports = {
  isP: isP,
  isD: isD,
  gulpPug: {
    pretty: isD,
  }
}