const mongoose = require('mongoose')

async function main(){
    await mongoose.connect('mongodb://localhost:27017/getapet') //Espera a conexão com o banco de dados
    console.log("Conectou ao mongoose!")
}

//Ativa a função main() e caso der erro, irá aparecer
main().catch((err) => console.log(err))

module.exports = mongoose