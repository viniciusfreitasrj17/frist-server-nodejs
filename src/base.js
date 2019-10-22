const fs = require('fs')
let db = require('../db/db.json')

/*
const sequence = {
	_id: 1,
	get id(){
		return this._id++
	}
}

produtos = {}
*/
function fsUp(b){
	fs.writeFile(__dirname + '/../db/db.json', JSON.stringify(b), 'utf8', (err) => {
		console.log(err || 'Save data')
	})
}
const getProdutos = () => db

const getProduto = (id) => db[id] || {}

const setProduto = (prod) => {
	let i = (Object.keys(db).length ? Object.keys(db) : [0]).reduce((ult, num) => { return (ult > num) ? ult : num })
	if(!prod.id)  prod.id = ++i
	db[prod.id] = prod

	fsUp(db)
	return prod
}

const delProduto = (id) => {
	const prod = db[id]
	delete db[id]
	fsUp(db)
	return prod
}

const delProdutos = () => {
	db = {}
	fsUp(db)
	return db
}

module.exports = { getProdutos, getProduto, setProduto, delProduto, delProdutos }
