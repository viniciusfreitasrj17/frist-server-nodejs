const express = require('express')
const bodyParser = require('body-parser')
const base = require('./base')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
	res.send('Testando Express()')
})

app.listen(3000, () => {
	console.log('Exec...')
})
