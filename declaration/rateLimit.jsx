/*
   * by balzz
   * dont delate my wm
   * follow more instagram: @iqstore78
*/
const rateLimit = require("express-rate-limit")

const limit = rateLimit({
  windowMs: 10 * 1000,
  max: 3,
  message: "Too Many Requests!, try again next time sensei"
})

module.exports = limit