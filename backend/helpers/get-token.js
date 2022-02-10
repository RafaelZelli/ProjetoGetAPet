//Função que tem como objetivo extrair o token da requisição
//O Token vem com a palavra Bearer, então vou excluir essa palavra..
const getToken = (req) =>{
    const authHeader = req.headers.authorization //pega os headers de authorization..
    const token = authHeader.split(' ')[1] //Primeiro ele criar uma array (' ') 
    // com 2 elementos: bearer e o token, depois eu pego o inidice 1 do array, que seria o token apenas

    return token
}

module.exports = getToken