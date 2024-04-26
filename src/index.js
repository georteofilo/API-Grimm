require("dotenv").config()
const express = require("express")
const app = express()
const routes = require("./routes/routes")

app.use(express.json())
app.use(routes)

const port = process.env.PORT
app.listen(port)