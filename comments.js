// create a web server
// 1. import express
const express = require('express')
// 2. create a server
const app = express()
// 3. create a port
const port = 3000
// 4. create a route
app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})
// 5. listen to the port
app.listen(port, () => {
  console.log(`App running on port ${port}`)
})