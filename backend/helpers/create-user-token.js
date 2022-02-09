const jwt = require('jsonwebtoken')

const createUserToken = async (user,req,res) => {

    //cria um token
    const token = jwt.sign({
        name: user.name,
        id: user._id
    }, "nossosecret")  //forma de deixar o token único, fortifica o jwt

    //retorna o token
    res.status(200).json({
    message: 'Voce está autenticado',
    token: token,
    userId: user._id,
    })
}

module.exports = createUserToken