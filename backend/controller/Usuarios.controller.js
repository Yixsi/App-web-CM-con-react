import Usuario from '../models/usuarios';
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const usuarioCtrl = {}
const maxAge = 60 * 60

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
        res.cookie("jwt",token,{httpOnly:true,maxAge: maxAge*10000,secure: true, sameSite: 'lax'});
        res.json({
            mensaje: 0,
            id: NuevoUsuario._id,
            user: NuevoUsuario.user,
        }) 
    }
}

usuarioCtrl.verificarUser = async(req,res) =>{

    if(res.locals.user.id){
        const user = await Usuario.findOne({_id:res.locals.user.id})
        res.send(user)
    }else{
        res.send("No ha iniciado sesion")
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
        const token = createToken(user._id,user.role)
        res.cookie("jwt",token,{httpOnly:true,maxAge: maxAge*10000,secure: true, sameSite: 'lax'});
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
    res.cookie("jwt","",{ maxAge : 1});
    res.send("Okey")
}

module.exports = usuarioCtrl

