import React, { useState, useEffect} from "react";
import { Link, NavLink,useNavigate,/* useLocation */ } from 'react-router-dom'
import logo from "media/logo.png"
import axios from "axios"

function Header() {

    /* const location = useLocation(); */
    const navigate = useNavigate()
    const [rolIniciarSeccion,setRol] = useState(0);


    useEffect(() =>{
        axios.get("/auth/verificar-user")
        .then((res)=>{
            setRol(res.data.role)
        }).catch(err=>{
            console.log(err)
        })
    },[]);

    function cerrarSesion(){
        axios
        .post("/api/cerrar-sesion")
        .then((res)=>{
            navigate("/") 
            window.location.reload(false);
        })
    }

    return (
        <header className="mb-auto">
            <nav className="navbar navbar-expand-lg navbar-dark bg-black">
                <div className="container" style={{ marginLeft: "50px" }}>
                    <NavLink to="/" className="navbar-brand mx-xs-0 mx-sm-4 mx-lg-5">
                        <img src={logo} alt="" width="150" height="40" className="d-inline-block align-text-top" />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                        <div className="d-flex">
                            <ul id="nav" className="navbar-nav nav-masthead me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink to="/" className="nav-link" aria-current="page">Inicio</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/nosotros" className="nav-link">Nosotros</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/productos" className="nav-link">Productos</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/articulos" className="nav-link">Artículos</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/contacto" className="nav-link">Contacto</NavLink>
                                </li>
                                <li>

                                    {rolIniciarSeccion > 0
                                        ?   <div>
                                                <a  href="/#" className="px-3 text-light perfil dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="far fa-user-circle"></i></a>

                                                <div className="dropdown-menu" aria-labelledby="navbar-dropdown">
                                                    <Link style = { rolIniciarSeccion > 1 ? {} :{display: 'none'}} to="/dashboard-products" className="dropdown-item menuperfil cerrar"><i className="fas fa-exchange-alt"></i> Dashboard</Link>
                                                    <Link to="" className="dropdown-item menuperfil cerrar"><i className="fas fa-exchange-alt"></i>  Cambiar contraseña</Link>
                                                    <button to="/" className="dropdown-item menuperfil cerrar" onClick= {(() => cerrarSesion())} ><i className="fas fa-sign-out-alt m-1"></i> Cerrar sesion</button>
                                                </div>
                                            </div>
                                        : <Link to="/login" className="px-3 text-light perfil" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="far fa-user-circle hvr-icon-sink"></i></Link>
                                    }
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header

