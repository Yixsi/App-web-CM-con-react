import React, { useState,useEffect  } from "react";
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import Layout from "layouts/Layout"
import Cookies from "universal-cookie"

axios.defaults.withCredentials = true;

function Login() {

    const cookies = new Cookies();
    const navigate = useNavigate()

    useEffect(() => {
        const rolUsuario = (cookies.get("rolUsuario"));
        if(rolUsuario > 0 ){
            console.log(rolUsuario)
            navigate('/')
        }
    },)

    const[name,setName] =useState("")
    const[email,setEmail] =useState("")
    const[user,setUser] =useState("")
    const[pass,setPass] =useState("")
    const [usuario,setUsuario] = useState("")
    const [contraseña,setContraseña] = useState("")
    const [mensaje, setMensaje] = useState("") 
    const[mensajeRegistrar,setMensajeRegistrar] = useState("")

    function registrarUsuario(e){
        e.preventDefault()
        const atributos = {
            name,email,user,pass
        }
        axios.post('/nuevo-usuario',atributos)
        .then(res=>{
            setMensajeRegistrar(res.data.mensaje)
           /*  cookies.set('rolUsuario',1)
            navigate('/') */
        }) 
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        const datos = {
            email:usuario,pass:contraseña
        }
        axios.post('/login',datos)
        .then(res=>{
            if(res.data.mensaje === 1){
                cookies.set('rolUsuario',res.data.role)
                navigate('/')
            }
            else{
                setMensaje(res.data.mensaje)
            }
        })
    }

    return (
        <Layout>
            <div className="container mx-auto">
                <section className="row d-flex">

                    <div className="col-10 col-lg-5 mx-auto">
                        <form onSubmit = {handleSubmit}>
                            <div className="contenedor">
                                <h2>Inicicar Sesion</h2>
                                <div className=" fontuser element">
                                    <i className="fas fa-user"></i>
                                    <div className="label"><label htmlFor="email">Correo electrónico</label></div>
                                    <input id="usuarioLogin" type="email" name="usuario" placeholder="Escriba su usuario" value={usuario} onChange={(e)=>setUsuario(e.target.value)} required/><br />
                                </div>
                                <div className="element fontpass">
                                    <i className="fas fa-key"></i>
                                    <div className="label"><label htmlFor="password">Contraseña</label></div>
                                    <input id="passwordLogin" type="password" name="password" placeholder="Escriba su contraseña" value={contraseña} onChange={(e)=>setContraseña(e.target.value)} required/><br />
                                </div>
                                <div className="element">
                                    <p className="text" style = {{color:"#f6821f",fontWeight:"bold"}}>{mensaje}</p>
                                </div>
                                <input id="botonLogin" type="submit" className="btn btn-primary"  />
                            </div>
                        </form>
                    </div>

                    <div className="col-10 col-lg-5 mx-auto">

                        <form onSubmit = {registrarUsuario}>
                            <div className="registro">
                                <h2 className="mt-3">Registro</h2>
                                <div className="fontuser element">
                                    <br />
                                    <div className="label"><label htmlFor="nombre">Nombre</label></div>
                                    <input id="nombre" type="text" name="nombre" placeholder="Escriba su nombre" value={name} onChange={(e)=>setName(e.target.value)}/><br/>
                                </div>
                                <div className="fontuser element">
                                    <br />
                                    <div className="label"><label htmlFor="email">Correo</label></div>
                                    <input id="email" type="email" name="email" placeholder="Escriba su email" value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
                                </div>


                                <div className="fontuser element">
                                    <br />
                                    <div className="label"><label htmlFor="email">Usuario</label></div>
                                    <input id="usuario" type="text" name="usuario" placeholder="Escriba su usuario" value={user} onChange={(e)=>setUser(e.target.value)}/><br/>
                                </div><br />
                                <div className="element fontpass">
                                    <div className="label"><label htmlFor="password">Contraseña</label></div>
                                    <input id="password" type="password" name="password" placeholder="Escriba su contraseña"  value={pass} onChange={(e)=>setPass(e.target.value)}/>
                                </div><br />
                                <div className="element">
                                    <p  style = {{color:"#f6821f",fontWeight:"bold"}} className="text">{mensajeRegistrar}</p>
                                </div>

                                <input id="boton" className="btn btn-primary" type="submit" value="Registrarse"/>
                            </div>
                        </form>
                    </div>
                    
                </section>
            </div>

        </Layout>
    )

}

export default Login