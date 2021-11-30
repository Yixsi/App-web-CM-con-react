import jwt from "jsonwebtoken"

const requireAuth = (req,res,next)=>{
    const token = req.cookies.jwt;
    if(token){
        jwt.verify(token,process.env.JWT_SECRET,(error,tokenDecodificado)=>{
            if(error){
                res.send("Acceso denegado",error.message)
            }else{
                res.locals.user = tokenDecodificado
                next()
            }
        })
    }else{
        res.send("Acceso denegado")
    }
}

module.exports = {requireAuth}