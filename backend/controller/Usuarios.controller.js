import Usuario from '../models/usuarios';
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const usuarioCtrl = {}
const maxAge = 60

function createToken(id){
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:maxAge})
}

usuarioCtrl.crear = async(req,res)=>{
    const {name,email,user,pass} = req.body
    const NuevoUsuario = new Usuario({
        name,
        email,
        user,
        pass,
        role: 1
    })

    const User = await Usuario.findOne({
        $or: [
            { "email" : email },
            { "user": user }
        ]
    })

    if(User){
        res.json({
            mensaje: 'El correo y/o usuario ya existentes'
        })
    }
    
    else{
        NuevoUsuario.pass = await bcrypt.hash(pass,10) 
        await NuevoUsuario.save()
        const token = createToken(user._id)
        res.cookie("jwt",token,{httpOnly:true,maxAge: maxAge*10000});
        res.json({
            mensaje: 'Bienvenido',
            id: NuevoUsuario._id,
            user: NuevoUsuario.user,
        }) 
    }
}

usuarioCtrl.login = async(req,res)=>{
    const {email,pass} = req.body
    const user = await Usuario.findOne({email:email})
    if(!user){
        return res.json({
            mensaje: "Email y/o contraseña incorrectos"
        })
    }
    const match = await bcrypt.compare(pass,user.pass)
    if(match){
        const token = createToken(user._id)
        res.cookie("jwt",token,{httpOnly:true,maxAge: maxAge*100});
        res.json({
            mensaje: 1,
            id: user._id,
            nombre: user.nombre,
            role: user.role,
        })
    }
    else{
        res.json({
            mensaje: "Email y/o contraseña incorrectos"
        })
    }
}

usuarioCtrl.cerrarSesion = async(req,res)=>{
    res.cookie("jwt","",1);
}

module.exports = usuarioCtrl

