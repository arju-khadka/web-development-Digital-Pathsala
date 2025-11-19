
const express = require('express')
const app = express()

app.get("/", (req, res) => {
  res.send("<mark>Home Page</mark>")
})

app.get("/about", (req, res) => {
  res.send("This is about page")
})

app.get("/contact", (req, res) => {
  res.send("This is contact Page")
})

app.listen(3000, () => {
  console.log("NodeJS Project has started at port 3000")
})
