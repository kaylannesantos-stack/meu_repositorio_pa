const express = require('express')
const cors = require('cors')
const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize('livros', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

const Livros = sequelize.define('Livros', {
    titulo: { type: DataTypes.STRING, allowNull: false },
    autor: { type: DataTypes.STRING, allowNull: false },
    numero_paginas: { type: DataTypes.INTEGER, allowNull: false }, // <-- Vírgula adicionada e mudado para INTEGER
    preco: { type: DataTypes.DECIMAL(10, 2), allowNull: false }   // <-- DECIMAL(10, 2) para aceitar centavos
})

const api = express()
api.use(cors())
api.use(express.json())

const port = 5000

api.post('/livros', async (req, res) => {
    try {
        const { titulo, autor, numero_paginas, preco } = req.body
        const novolivro = await Livros.create({ titulo, autor, numero_paginas, preco })
        res.status(201).json({
            mensagem: 'Livro cadastrado com sucesso!',
            livro: novolivro
        })
    } catch (erro) {
        console.log('DETALHE DO ERRO:', erro)
        res.status(400).json({ mensagem: 'Erro ao cadastrar o novo livro.' })
    }
})

// <-- Parênteses corrigidos aqui:
api.get('/livros', async (req, res) => {
    try {
        const todoslivros = await Livros.findAll()
        res.json(todoslivros)
    } catch (erro) {
        res.status(500).json({ mensagem: 'Erro ao buscar os livros!' })
    }
})

sequelize.sync().then(() => {
    api.listen(port, () => {
        console.log(`Servidor rodando em http://localhost:${port}`)
        console.log('Banco de dados conectado.')
    })
}).catch(erro => {
    console.log('Erro ao conectar ao banco de dados.')
    console.log('Encontre o erro aqui: ', erro)
})