const express = require('express')
const app = express()
const cors = require("cors")

const pokemon =  require('./app/routes/pokemon.route')

const port = 3000

var corsOptions = {
  origin: `http://localhost:${port}`
};

app.use(cors(corsOptions))
app.use('/pokemon', pokemon)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})