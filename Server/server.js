require('dotenv').config()
const express = require('express')


const app = express()
const PORT = process.env.PORT ?? 2000


app.listen(PORT, () => {
    console.log(`running on port ${PORT}`)
  })