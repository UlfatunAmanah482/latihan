require('dotenv').config()

const express = require('express')
const app = express()
const router = require('./routes')
const path = require('path')
const PORT = process.env.PORT

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(router)

app.listen(PORT, () => {
  console.log(`server menyala di port ${PORT}`)
})