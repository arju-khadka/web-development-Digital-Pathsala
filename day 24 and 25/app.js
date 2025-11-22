
const express = require('express')
const app = express()

app.set("view engine", "ejs")

app.get("/", (req, res) => {
  const person = {
    name : "Arju Khadka",
    age : 22,
    address : "Damak"
  }
  res.render("home.ejs",{person})
})

app.get("/about", (req, res) => {
  res.render("about.ejs")
})

app.get("/contact", (req, res) => {
  res.render("contact.ejs")
})

app.listen(3000, () => {
  console.log("NodeJS Project has started at port 3000")
})
