const User = require('../models/User')
const bcrypt = require('bcrypt')
const createUserToken = require('../helpers/create-user-token')

module.exports = class UserController{
    static async register(req,res){
        //Pega todos os campos que vem do body e trazemos para uma variável
        const {name,email,phone,password,confirmpassword} = req.body

        //Validações
        if(!name){  //Se o nome não veio...
            res.status(422).json({message: 'O nome é obrigatório'})
            return
        } 

        if(!email){  //Se o email não veio...
            res.status(422).json({message: 'O e-mail é obrigatório'})
            return
        } 

        if(!phone){  //Se o phone não veio...
            res.status(422).json({message: 'O telefone é obrigatório'})
            return
        } 

        if(!password){  //Se a senha não veio...
            res.status(422).json({message: 'A senha é obrigatória'})
            return
        } 

        if(!confirmpassword){  //Se confirmação de senha não veio...
            res.status(422).json({message: 'A confirmação de senha é obrigatória'})
            return
        }

        if(password !== confirmpassword){   //Se a senha for diferente da confirmação...
            res.status(422).json({message:"Favor confirme a senha corretamente"})
            return
        }

        //Verifica se já existe um usuário
        const userExists = await User.findOne({email:email})

        if(userExists){
            res.status(422).json({message: 'Por favor, utilize outro e-mail'})
            return
        }

        //Criar senha
        //Isso fortifica a senha do usuario, pq além do algoritmo, vou usar uma string com 12 caractere a mais
        const salt = await bcrypt.genSalt(12)   
        const passwordHash = await bcrypt.hash(password,salt)  //Isso criptografa a senha

        //Cria um usuário
        const user = new User({
            name: name,
            email:email,
            phone:phone,
            password:passwordHash,
        }) 
        try {
            const newUser = await user.save()  //envia o usuário para o banco de dados
            await createUserToken(newUser, req, res)
        } catch (error) {
            res.status(500).json({message:error})
        }    
        
    }
}