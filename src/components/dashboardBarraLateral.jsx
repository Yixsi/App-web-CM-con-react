import {NavLink} from 'react-router-dom'

function dashboard() {
    return (
        <div className="barra-lateral col-md-2 col-sm-auto">
            <nav className="menu d-flex d-sm-block justify-content-center align-items-center flex-wrap" >
                <NavLink to="/dashboard-user"><i className="fas fa-user-friends"></i><span>Usuarios</span></NavLink>
                <NavLink to="/dashboard-products"><i className="fas fa-store"></i><span>Productos</span></NavLink>
                {/* <a href="/#"><i className="fas fa-clipboard-list"></i><span>Categorias</span></a> */}
            </nav>
        </div>)
}

export default dashboard