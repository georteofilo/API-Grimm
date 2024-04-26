const express = require("express")
const routes = express()


routes.get("/", (req, res) => {
  res.json("OK")
})

module.exports = routes