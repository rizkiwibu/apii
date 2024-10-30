/*
   * by balzz
   * dont delate my wm
   * follow more instagram: @iqstore78
*/
const express = require("express")
const axios = require("axios")
const path = require("path")
const app = express()
const limit = require("../declaration/rateLimit.jsx")
const kotakHytam = require("../pages/fitures/blackbox.js")

app.get("/", limit, (req, res) => {
  res.sendFile(path.join(__dirname, "../pages/404.html"))
})

/** example ajg **/
app.get("/blekbok", limit, async (req, res) => {
  kotakHytam(req, res)
})

module.exports = app