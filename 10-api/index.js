// importações.
const express = require('express')
const cors = require('cors')
const { Sequelize, DataTypes } = require('sequelize')

// Configuração do banco de dados.
const sequelize = new Sequelize('db_projeto', 'root', '', {
    host: 'localhost',
    dialect:  'mysql'
})

// Característica da tabela no banco de dados.
const Cliente = sequelize.define('Cliente', {
    nome: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    telefone: { type: DataTypes.STRING, allowNull: false }
})

// Configurações da API.
const api = express()
api.use(cors())
api.use(express.json())

const port = 5000

// Cadastrar um novo cliente.
api.post('/clientes', async (req, res) => {
    try {
        const { nome, email, telefone } = req.body
        const novoCliente = await Cliente.create({ nome, email, telefone })
        res.status(201).json({
            mensagem: 'Cliente cadastrado com sucesso!',
            cliente: novoCliente
        })
    } catch (erro) {
        res.status(400).json({ mensagem: 'Erro ao cadastrar o novo cliente.' })
    }
})

// Buscar todos os clientes no banco de dados.
api.get('/clientes', async (req, res) => {
    try {
        const todosOsClientes = await Cliente.findAll()
        res.json(todosOsClientes)
    } catch (erro) {
        res.status(500).json({ mensagem: 'Erro ao buscar os clientes!' })
    }
})

// Iniciando o servidor e conectando ao banco de dados.
sequelize.sync().then(() => {
    api.listen(port, () => {
        console.log(`Servidor rodando em http://localhost:${port}`)
        console.log('Banco de dados conectado.')
    })
}).catch(erro => {
    console.log('Erro ao conectar ao banco de dados.')
    console.log('Encontre o erro aqui: ', erro)
})