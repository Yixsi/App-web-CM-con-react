import Usuario from '../models/usuarios';
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const usuarioCtrl = {}

usuarioCtrl.crear = async(req,res)=>{
    const {name,email,user,pass} = req.body
    const NuevoUsuario = new Usuario({
        name,
        email,
        user,
        pass,
        role: 1
    })

    const User = await Usuario.findOne({email:email})
    if(User){
        res.json({
            mensaje: 'El usuario ya existe'
        })
    }
    
    else{
        NuevoUsuario.pass = await bcrypt.hash(pass,10) 
        const token = jwt.sign({_id:NuevoUsuario._id},'Secreta')
        await NuevoUsuario.save()
        res.json({
            mensaje: 'Bienvenido',
            id: NuevoUsuario._id,
            user: NuevoUsuario.user,
            token
        }) 
    }
}

usuarioCtrl.login = async(req,res)=>{
    const {email,pass} = req.body
    const user = await Usuario.findOne({email:email})
    if(!user){
        return res.json({
            mensaje: 0
        })
    }

    const match = await bcrypt.compare(pass,user.pass)
    if(match){
        console.log("Hola")
        const token = jwt.sign({_id: user._id},"Secreta")
        res.json({
            mensaje: 1,
            id: user.id,
            nombre: user.nombre,
            role: user.role,
            token
        })
    }
    else{
        res.json({
            mensaje: 2
        })
    }
}

module.exports = usuarioCtrl

