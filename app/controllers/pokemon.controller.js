const Pokemon = require('../models/pokemon.model.js')

const errorHandling = (req, res, err) => {
    if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Pokemon with id ${req.params.limit}`
        })
    } 
    else {
        res.status(500).send({
          message: "Error retrieving Tutorial with id " + req.params.id
        })
    }
}

exports.getPokemons = (req, res) => {
    const {limit} = req.params
    Pokemon.getPokemons(limit, (err, data) => {
        if (err) {
            errorHandling(req, res, err)
        }
        res.send(data)
    })
}

exports.addPokemon = (req, res) => {
    const newPokemon = req.body

    Pokemon.addPokemon(newPokemon, (err, data) => {
        if (err) {
            errorHandling(req, res, err)
        }
        res.send(data)
    })
}

exports.deletePokemon = (req, res) => {
    const { id } = req.params

    Pokemon.deletePokemon(id, (err, data) => {
        if (err) {
            errorHandling(req, res, err)
        }
        res.send(data)
    })
}