import React, { useState } from "react";
import axios from "axios";
import Layout from "layouts/Layout"

function Login() {


    const [usuario,setUsuario] = useState("")
    const [contraseña,setContraseña] = useState("")
    const [usuarios,setUsuarios] = useState([])
    const [mensaje, setMensaje] = useState([])

    React.useEffect(() => {
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
            setMensaje("El usuario se encontro el base de datos");
        }else{
            setMensaje("La contraseña que ingresaste es incorrecta")
        }
    }

    return (
        <Layout>
            <div className="container mx-auto">
                <section className="col-9 col-lg-4 mx-auto">
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
                </section>
            </div>

        </Layout>
    )

}

export default Login