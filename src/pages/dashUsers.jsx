import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "components/Footer";
import Header from "components/HeaderDashboard";
import BarraLateral from "components/DashboardBarraLateral"

function Dashboard() {
    const [usersData, setData] = useState([]);
    const [editar] = useState(true);
    const [role, setRole] = useState("")
    const [user, setUser] = useState("")
    const [email, setEmail] = useState("")
    const [_id, setId] = useState("")
    const [buscar, setBuscar] = useState("")

    useEffect(() => {
        axios.get("/api/listar-usuarios").then((response) => {
            setData(response.data);
        });
    }, []);

    function buscarUsuario(id) {
        axios
            .get(`/api/buscar-usuario/${id}`)
            .then(res => {
                setRole(res.data.role)
                setUser(res.data.user)
                setEmail(res.data.email)
                setId(res.data._id)
            })
            .catch(e => {
                console.log(e.response);
            })
    }

    function editarUsuario() {
        const usuario = {
            role, user, email
        }
        axios.put(`/api/editar-usuario/${_id}`, usuario)
            .then(res => {
                console.log(res.data)
            })
            .catch(e => {
                console.log(e.response);
            })
    }

    function eliminarUsuario(id){
        axios.delete(`/api/borrar-usuario/${id}`)
        .then(res=>{
            const borrarUser = usersData.filter((id) => id._id !== res.data._id);
            setData(borrarUser) 
        })
        .catch(e=>{
            console.log(e.response)
        })
    }

    return (
        <div /* style={{ backgroundColor: "#f1f1f1" }} */>
            <Header></Header>
            <div className="container-fluid">
                <div className="row">
                    <BarraLateral/>
                    <main className="main col">
                        <div className="row justify-content align-content-center text-center d-flex">
                            <div className="col-12 col-lg-5 mx-auto mt-3">
                                {editar === false
                                    ? <form v-if="!editar">
                                        <div className="contenedor">

                                            <h2>Crear un nuevo usuario</h2>
                                            <div className="element mb-3">
                                                <div className="label">
                                                    <label htmlFor="usuario">Usuario</label>
                                                </div>
                                                <input
                                                    id="usuario"
                                                    type="text"
                                                    placeholder="Escriba el nombre de usuario"
                                                    v-model="atributos.user"
                                                    required
                                                />
                                                <br />
                                            </div>
                                            <div className="element mb-3">
                                                <div className="label">
                                                    <label htmlFor="password">Contraseña</label>
                                                </div>
                                                <input
                                                    id="password"
                                                    type="text"
                                                    placeholder="Escriba la contraseña"
                                                    v-model="atributos.pass"
                                                    required
                                                />
                                                <br />
                                            </div>
                                            <div className="element mb-3">
                                                <div className="label">
                                                    <label htmlFor="role">Rol</label>
                                                </div>
                                                <select
                                                    id="role"
                                                    className="form-select"
                                                    aria-label="Default select example"
                                                    v-model="atributos.role"
                                                    required
                                                >
                                                    <option disabled>Root</option>
                                                    <option value="0">Administrador</option>
                                                </select>
                                            </div>
                                            <input
                                                className="btn btn-primary"
                                                type="submit"
                                                value="Agregar"
                                            />
                                        </div>
                                    </form>
                                    : <form onSubmit={editarUsuario}>
                                        <div className="contenedor">
                                            <h2>Editar usuario</h2>
                                            <div className="element mb-3">
                                                <div className="label">
                                                    <label htmlFor="user">Usuario</label>
                                                </div>
                                                <input
                                                    id="user"
                                                    type="text"
                                                    placeholder="Escriba el nombre de usuario"
                                                    value={user}
                                                    onChange={(e) => setUser(e.target.value)}
                                                />
                                                <br />
                                            </div>
                                            <div className="element mb-3">
                                                <div className="label">
                                                    <label htmlFor="password">Email</label>
                                                </div>
                                                <input
                                                    id="password"
                                                    type="text"
                                                    placeholder="Escriba la contraseña"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                                <br />
                                            </div>
                                            <div className="element mb-3">
                                                <div className="label">
                                                    <label htmlFor="role">Rol</label>
                                                </div>
                                                <select
                                                    id="role"
                                                    className="form-select"
                                                    aria-label="Default select example"
                                                    v-model="usuarioEditar.role"
                                                    value={role}
                                                    onChange={(e) => setRole(e.target.value)}
                                                >
                                                    <option value="1">Usuario</option>
                                                    <option value="2">Administrador</option>
                                                </select>
                                            </div>
                                            <input
                                                className="btn btn-primary"
                                                type="submit"
                                            />
                                        </div>
                                    </form>
                                }
                            </div>
                            <div className="col-12 col-lg-7 mx-auto">
                                <div className="contenedor">
                                    <h2>Usuarios registrados</h2>
                                    <div className="element">
                                        <div className="label">
                                            <label htmlFor="usuario" className="form-label text-dark">
                                                Usuario
                                            </label>
                                        </div>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="usuario"
                                            value={buscar}
                                            onChange={event => setBuscar(event.target.value)}
                                            autoComplete="off"
                                        />
                                        <br />
                                    </div>
                                    <div className="mb-3">
                                        <div className="table-responsive">
                                            <table className="table table-striped table-hover ">
                                                <thead className="thead-dark">
                                                    <tr>
                                                        <th>Rol</th>
                                                        <th>Usuario</th>
                                                        <th>Email</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {usersData.filter(i => i.user.toLowerCase().match(buscar.toLowerCase())).map((i, index) => (
                                                        <tr key={index}>
                                                            <td>{i.role}</td>
                                                            <td>{i.user}</td>
                                                            <td>{i.email}</td>
                                                            <td>
                                                                <button type="button" className="btn btn-warning" onClick={() => buscarUsuario(i._id)}>
                                                                    Editar
                                                                </button>
                                                            </td>
                                                            <td>
                                                                <button type="button" className="btn btn-danger" onClick={()=> eliminarUsuario(i._id)}>
                                                                    Eliminar
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                            {/* <nav aria-label="Page navigation example"  className="element">
                                        <ul  className="pagination">
                                            <li  className="page-item"  @click = "getPreviousPagina()"><a  className="page-link">Previous</a></li>
                                        <li v-for="(pagina,index) in totalPaginas()"   "getDataPagina(pagina)" :key= "index"  className="page-item" ><a  className="page-link">{{ pagina }}</a></li>
                                    <li  className="page-item" @click = "getNextPagina()"><a  className="page-link">Next</a></li>
                            </ul>
                        </nav> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Dashboard;
