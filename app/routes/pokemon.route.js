const express = require('express')
const pokemon = require('../controllers/pokemon.controller.js')
const router = express.Router()
router.use(express.json())

router.get('/:limit', pokemon.getPokemons)

router.post('/', (req, res) => {
    const {
        id,
        number,
        name,
        types
    } = req.body

    // Handle database call

    res.status(200).send({
        id,
        number,
        name,
        types
    })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params

    res.status(200).send({ 'message' : `Pokemon with id ${id} has been deleted`})
})

module.exports = router