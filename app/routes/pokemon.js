const express = require('express')

const router = express.Router()
router.use(express.json())

router.get('/:limit', (req,res) => {
    const {limit} = req.params
    const data = [
        {
            'sheeesh': 'sheeesh'
        }
    ]
    if (!limit) {
        res.status(418).send({ 'message' : 'Limit is a mandatory parameter' })
    }

    // Handle database call

    res.status(200).send({data})
})

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