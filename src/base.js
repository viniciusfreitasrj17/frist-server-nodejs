const sequence = {
	_id: 1,
	get id(){
		return this._id++
	}
}

produtos = {}

const getProdutos = () => Object.values(produtos) || {}

const getProduto = (id) => produtos[id] || {}

const setProduto = (produto) => {
	const prod = produto
	if(!prod.id)  prod.id = sequence.id
	produtos[prod.id] = produto
	return prod
}

const delProduto = (id) => {
	const prod = produtos[id]
	delete produtos[id]
	return prod
}

const delProdutos = () => produtos = {}

module.exports = { getProdutos, getProduto, setProduto, delProduto, delProdutos }
