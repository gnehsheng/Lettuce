require('dotenv').config()
const express = require('express')
const app = express()
const server = require('http').createServer(app)
const ioUtils = require('./utils/io')
const PORT = process.env.PORT ?? 2000

app.use(express.json())

app.get('/api', (req,res) => {
  res.send('hello world')
})

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`)
  })