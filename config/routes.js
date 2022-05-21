const express = require('express')
const routes = express.Router()


let db = [
    { '1': { Nome: 'cliente 1', idade: 20 } },
    { '2': { Nome: 'cliente 2', idade: 30 } },
    { '3': { Nome: 'cliente 3', idade: 40 } },
]

routes.get('/', (req, res) => {
    return res.json(db)
})

routes.post('/add', (req, res) => {
    const body = req.body

    if (!body)
        return res.status(400).json({
            error: 'Dados não foram informados'
        })

    db.push(body)

    return res.json(db)
})

routes.delete('/delete/:id', (req, res) => {
    const id = req.params.id

    let newDB = db.filter(item => {
        if (!item[id])
            return item
    })

    db = newDB

    return res.send(newDB)
})

module.exports = routes;