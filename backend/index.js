const express = require('express')
const cors = require('cors')

const app = express()

//Configura resposta do JSON
app.use(express.json())

//Resolve o problema do Cors
app.use(cors({credentials:true, origin:'http://localhost:3000'}))

//Pasta publica das imagens
app.use(express.static('public'))

//Rotas de acesso da api
const UserRoutes = require('./routes/UserRoutes')
app.use('/users',UserRoutes)


app.listen(5000)