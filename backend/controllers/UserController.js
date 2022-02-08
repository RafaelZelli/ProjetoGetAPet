const User = require('../models/User')

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

        
        
    }
}