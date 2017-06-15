const express = require('express')
const drinks = require('./drink-names.json')
const bars = require('./bar-names.json')
const { port=3333, delay=0 } = require('minimist')(process.argv)
const cors = require('cors')

const byName = name => fullName =>
    name.toLowerCase() === fullName.substr(0, name.length).toLowerCase()

const logger = (req, res, next) => {
    console.log(`${req.method} request for ${req.url}`)
    next()
}

const app = express()
    .use(logger)
    .use(cors())
    .use('/', express.static('./dist/img'))
    .get('/drinkNames', (req, res) =>
        res.status(200).json(drinks)
    )
    .get('/drinkNames/:name', (req, res) =>
        setTimeout(() =>
                res.status(200).json(
                    drinks.filter(byName(req.params.name))
                ),
            delay
        )
    )    
    .get('/barNames', (req, res) =>
        res.status(200).json(bars)
    )
    .get('/barNames/:name', (req, res) =>
        setTimeout(() =>
                res.status(200).json(
                    bars.filter(byName(req.params.name))
                ),
            delay
        )
    )

app.listen(port, () => console.log('Suggestions app running on port ' + port + ' with a ' + delay/1000 + ' second delay'))