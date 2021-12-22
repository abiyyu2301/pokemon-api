const express = require('express')
const app = express()
const pokemon =  require('./app/routes/pokemon')
const port = 3000

app.use('/pokemon', pokemon)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})