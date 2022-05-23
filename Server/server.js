require('dotenv').config()
const express = require('express')
const app = express()
const server = require('http').createServer(app)
const ioUtils = require('./utils/io')
const PORT = process.env.PORT || 2002

const io = require('socket.io')(server, {
  path:'/socket',
  origins: ['https://lettuce-vid.netlify.app'],
  serveClient: false
})


app.get('/api', (req,res, next) => {
  res.send('hello world')
})

ioUtils.setupIO(io);

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`)
  })

