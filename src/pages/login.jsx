import React, { useState,useEffect  } from "react";
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import Layout from "layouts/Layout"
import Cookies from "universal-cookie"

function Login() {

    const cookies = new Cookies();
    const navigate = useNavigate()
    const [usuario,setUsuario] = useState("")
    const [contraseña,setContraseña] = useState("")
    const [usuarios,setUsuarios] = useState([])
    const [mensaje, setMensaje] = useState([])

    useEffect(() => {
        axios.get("/listar-usuarios")
        .then((response) =>{
            setUsuarios(response.data)

        })
    },[]) 

    const handleSubmit = (e) =>{
        e.preventDefault()
        
        const prueba = usuarios.filter((e)=> e.user === usuario)
        if(prueba.length === 0){
            setMensaje("El usuario no se encuentra registrado");

        }
        else if (prueba[0].pass === contraseña){
            cookies.set('rolUsuario',prueba[0].role,{path: "/"})
            navigate('/')
        }else{
            setMensaje("La contraseña que ingresaste es incorrecta")
        }
    }

    return (
        <Layout>
            <div className="container mx-auto">
                <section className="row d-flex">

                    <div className="col-10 col-lg-5 mx-auto">
                        <form onSubmit = {handleSubmit}>
                            <div className="contenedor">
                                <h2>Acceso a Dashboard</h2>
                                <div className=" fontuser element">
                                    <i className="fas fa-user"></i>
                                    <div className="label"><label htmlFor="email">Usuario</label></div>
                                    <input id="usuario" type="text" name="usuario" placeholder="Escriba su usuario" value={usuario} onChange={(e)=>setUsuario(e.target.value)} required/><br />
                                </div>
                                <div className="element fontpass">
                                    <i className="fas fa-key"></i>
                                    <div className="label"><label htmlFor="password">Contraseña</label></div>
                                    <input id="password" type="password" name="password" placeholder="Escriba su contraseña" value={contraseña} onChange={(e)=>setContraseña(e.target.value)} required/><br />
                                </div>
                                <div className="element">
                                    <p className="text-dark">{mensaje}</p>
                                </div>
                                <input id="boton" type="submit" className="btn btn-primary"  />
                            </div>
                        </form>
                    </div>

                    <div className="col-10 col-lg-5 mx-auto">

                        <form action="server" method="POST">
                            <div className="registro">
                                <h2 className="mt-3">Registro</h2>
                                <div className="fontuser element">
                                    <br />
                                    <div className="label"><label for="nombre">Nombre</label></div>
                                    <input id="nombre" type="text" name="nombre" placeholder="Escriba su nombre" v-model= "nombre"/><br/>
                                </div>
                                <div className="fontuser element">
                                    <br />
                                    <div className="label"><label for="email">Correo</label></div>
                                    <input id="email" type="email" name="email" placeholder="Escriba su email" v-model= "email"/><br/>
                                </div>


                                <div className="fontuser element">
                                    <br />
                                    <div className="label"><label for="email">Usuario</label></div>
                                    <input id="usuario" type="text" name="usuario" placeholder="Escriba su usuario" v-model= "usuario"/><br/>
                                </div><br />
                                <div className="element fontpass">
                                    <div className="label"><label for="password">Contraseña</label></div>
                                    <input id="password" type="password" name="password" placeholder="Escriba su contraseña" v-model= "contraseña"/>
                                </div><br />
                                

                                <input id="boton" className="btn btn-primary" type="submit" value="Iniciar sesión"/>
                            </div>
                        </form>
                    </div>
                    
                </section>
            </div>

        </Layout>
    )

}

export default Login