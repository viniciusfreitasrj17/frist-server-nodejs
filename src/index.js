const express = require('express')
const bodyParser = require('body-parser')
const base = require('./base')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
	res.send(base.getProdutos())
})

app.get('/:id', (req, res) => {
	res.send(base.getProduto(req.params.id))
})

app.post('/add', (req, res) => {
	const produto = base.setProduto({
		name: req.body.name,
		value: req.body.value
	})
	res.send(produto)
})

app.put('/add/:id', (req,res) => {
	const produto = base.setProduto({
		id: req.params.id,
		name: req.body.name,
		value: req.body.value
	})
	res.send(produto)
})

app.delete('/del/:id', (req, res) => {
	const produto = base.delProduto(req.params.id)
	res.send(produto)
})

app.delete('/del', (req, res) => {
	res.send(base.delProdutos())
})

app.listen(3000, () => {
	console.log('Exec...')
})
