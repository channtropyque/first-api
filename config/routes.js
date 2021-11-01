const express = require('express')
const routes = express.Router()

let db = [
    {'1': {Nome:'Ana Lucia', Idade: '20'}},
    {'2': {Nome:'João Antunes', Idade: '33'}},
    {'3': {Nome:'Channtropyque Salgado', Idade: '51'}}
]

// Buscar dados
routes.get('/', (req, res) => {
    return res.json(db)
})

// Inserir dados
routes.post('/add', (req, res) => {
    const body = req.body

    if (!body)
      return res.status(400).end()
    
    db.push(body)
    return res.json(body)        
})

// Deleta usuário
routes.delete('/:id', (req, res) => {
    const id = req.params.id

    let newDB = db.filter(item => {
        if (!item[id])
           return item
    })

    db = newDB

    return res.send(newDB)
})

module.exports = routes