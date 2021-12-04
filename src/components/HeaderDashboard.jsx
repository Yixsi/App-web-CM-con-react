import logo from "media/logo.png"
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="container-fluid">
            <div className="row  ">
                <div className="col-md-2 barra2">
                    <img className="image" src={logo} alt="" />
                </div>
                <div className="col-md-10 text-right barra">
                    <ul className="navbar-nav mr-auto">
                        <li>
                            <Link to="/" className="px-3 text-light perfil dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="far fa-user-circle"></i></Link>

                            <div className="dropdown-menu" aria-labelledby="navbar-dropdown">
                                <a className="dropdown-item menuperfil cerrar" href="/#"><i className="fas fa-sign-out-alt m-1"></i>Salir</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Header