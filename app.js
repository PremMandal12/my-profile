const express = require('express')
const path = require('path')
const app = express()

const port = 3000
app.use(express.static(path.join(__dirname, '/')))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, `index.html`))
  })
  
  app.get('/skills', (req, res) => {
    res.sendFile(path.join(__dirname, `skills.html`))
  })
app.listen(port, (error) => {
  console.log(`Server has started successfully!`)
})

