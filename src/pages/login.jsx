import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Layout from "layouts/Layout"
import "style/estilos-login.css"

axios.defaults.withCredentials = true;

function Login() {

    const navigate = useNavigate()

    const [on, setOn] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")
    const [usuario, setUsuario] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [mensaje, setMensaje] = useState("")
    const [mensajeRegistrar, setMensajeRegistrar] = useState("")


    function registrarUsuario(e) {
        e.preventDefault()
        const atributos = {
            name, email, user, pass
        }
        axios.post('/api/nuevo-usuario', atributos)
            .then(res => {
                if(res.data.mensaje === 0){
                    navigate("/")
                }
                else{
                    setMensajeRegistrar(res.data.mensaje)
                }
            })
    }

    function iniciarSesion(e) {
        e.preventDefault()
        const datos = {
            email: usuario, pass: contraseña
        }
        axios.post('/api/login', datos)
            .then(res => {
                if (res.data.mensaje === 1) {
                    navigate('/')
                }
                else {
                    setMensaje(res.data.mensaje)
                }
            })
    }

    return (
        <Layout>

            <div className="container mx-auto" >
                <section className="row d-flex">
                    <div className="col-10 col-lg-7 mx-auto">
                        <div className="contenedor">
                            <div className={`container1${on ? " log-in" : ""}`}>
                                <div className="box"></div>
                                <div className="container1-forms">
                                    <div className="container1-info">
                                        <div className="info-item">
                                            <div className="table">
                                                <div className="table-cell">
                                                    <p style={{ color: "white" }}>
                                                        ¿YA tienes una cuenta?
                                                    </p>
                                                    <div className="btn" onClick={() => setOn(false)}>
                                                        Log in
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="info-item">
                                            <div className="table">
                                                <div className="table-cell">
                                                    <p style={{ color: "white" }}>
                                                        ¿No tienes cuenta?
                                                    </p>
                                                    <div className="btn " onClick={() => setOn(true)}>
                                                        Registro
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="container1-form">

                                        <form onSubmit={iniciarSesion}>
                                            <div className="form-item log-in">
                                                <div className="table">
                                                    <div className="table-cell">
                                                        <input name="Username" placeholder="Email" type="email" value={usuario} onChange={(e) => setUsuario(e.target.value)} required />
                                                        <input name="Password" placeholder="Contraseña" type="Password" value={contraseña} onChange={(e) => setContraseña(e.target.value)} required />
                                                        <p>{mensaje}</p>
                                                        <button className="btn" type="submit">
                                                            Log in
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>

                                        <form onSubmit={registrarUsuario}>
                                            <div className="form-item sign-up">
                                                <div className="table">
                                                    <div className="table-cell">
                                                        <input name="email" placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                                        <input name="fullName" placeholder="Nombre Completo" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                                                        <input name="Username" placeholder="Usuario" type="text" value={user} onChange={(e) => setUser(e.target.value)} />
                                                        <input name="Password" placeholder="Contraseña" type="Password" value={pass} onChange={(e) => setPass(e.target.value)} />
                                                        <p>{mensajeRegistrar}</p>
                                                        <button className="btn" type="submit">
                                                            Registrarse
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )

}

export default Login