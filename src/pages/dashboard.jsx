import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import axios from "axios"
import logo from "media/logo.png"
import Footer from "components/Footer"

function Dashboard() {

    const [buscarProducto, setBuscar] = useState('')
    const [productosData, setProductosData] = useState([])
    const [editar, setEditar] = useState(false)
    const [articuloEditar, setArticuloEditar] = useState([])

    useEffect(() => {
        axios.get("/listar-articulos")
            .then((response) => {
                setProductosData(response.data)
            })
    }, [])

    function activarEdicion(codigo){
        setEditar(true)
        const producto = productosData.filter(e=>e.codigo === codigo)
        setArticuloEditar(producto)
    }

    function editarProducto(){

    }

    function borrarProducto(id, codigo) {
        axios.delete(`/borrar-articulo/${id}`)
            .then(res => {
                const borrarCarrito = productosData.filter((id) => id.codigo !== codigo);
                setProductosData(borrarCarrito)
            })
    }

    return (
        <div>
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

            <div className="container-fluid">
                <div className="row">

                    <div className="barra-lateral col-md-2 col-sm-auto">
                        <nav className="menu d-flex d-sm-block justify-content-center align-items-center flex-wrap" >
                            <a href="/#"><i className="fas fa-user-friends"></i><span>Usuarios</span></a>
                            <a href="/#"><i className="fas fa-store"></i><span>Productos</span></a>
                            <a href="/#"><i className="fas fa-clipboard-list"></i><span>Categorias</span></a>
                        </nav>
                    </div>

                    <main className="main col">
                        <div className="row justify-content-center align-content-center text-center d-flex">
                            <div className="col-md-5 mx-auto" >

                                {editar === false
                                    
                                    ?<form className="No editar-prueba">
                                    <h2> <font size="15"><b>Crear Producto</b> </font></h2>

                                    <div className="element">
                                        <div className="label"><label htmlFor="codeproduct" className="form-label text-dark"> Código del producto</label></div>
                                        <input type="text" className="form-control" id="codeproduct" v-model="atributos.codigo" />
                                    </div>

                                    <div className="element">
                                        <div className="label"><label htmlFor="producto" className="form-label text-dark">Nombre</label></div>
                                        <input type="text" className="form-control" id="producto" aria-describedby="productoactual" v-model="atributos.nombre" />
                                        <div id="emailHelp" className="form-text"></div>
                                    </div>
                                    <div className="element">
                                        <div className="label"><label htmlFor="precioProducto" className="form-label text-dark">Precio</label></div>
                                        <input type="number" className="form-control" id="precioProducto" v-model="atributos.precio" />
                                    </div>
                                    <div className="element">
                                        <div className="label"><label htmlFor="cantidad" className="form-label text-dark">Cantidad</label></div>
                                        <input type="number" className="form-control" id="cantidad" v-model="atributos.cantidad" />
                                    </div>
                                    <div className="element">
                                        <div className="label"><label htmlFor="url" className="form-label text-dark">Imagen</label></div>
                                        <input type="text" className="form-control" id="url" v-model="atributos.url" />
                                    </div>
                                    <div className="element">
                                        <div className="label"><label htmlFor="categoria" className="form-label text-dark">Categoría</label></div>
                                        <select className="form-select" aria-label="Default select example" v-model="atributos.categoria">
                                            <option selected>Hogar</option>
                                            <option >Eléctricos</option>
                                            <option >Herraminetas</option>
                                            <option >Tuberia</option>
                                            <option >Otros</option>
                                        </select>
                                    </div>
                                    <div className="element">
                                        <div className="label"><label htmlFor="fecha" className="text-dark form-label">Fecha de registro</label></div>
                                        <input type="date" className="form-control" id="fecha" v-model="atributos.fecha" />
                                    </div>
                                    <div className="element">
                                        <div className="label"><label htmlFor="articulodescripcion" className="form-label text-dark">Descripción</label></div>
                                        <textarea className="form-control" id="articulodescripcion" rows="3" v-model="atributos.descripcion"></textarea>
                                    </div>
                                    <div className="elment">
                                        <br />
                                        <b className="text-danger">{ }</b>
                                    </div>
                                    <button type="submit" className="btn btn-primary mt-4">Agregar</button>

                                        </form>  

                                    :<form className = "Editar-SoloVer">
                                        
                                    <h2>Editar Producto</h2>
                                    <div className="element">
                                        <div className="label"><label htmlFor="producto" className="form-label text-dark">Nombre</label></div>
                                        <input type="text" className="form-control" id="producto" aria-describedby="productoactual" v-model="articuloEditar.nombre" value={editarProducto.nombre}/>
                                        <div id="emailHelp" className="form-text"></div>
                                    </div>

                                    <div className="element">
                                        <div className="label"><label htmlFor="categoria" className="form-label text-dark">Categoría</label></div>
                                        <select className="form-select" aria-label="Default select example" value={articuloEditar.categoria}>
                                            <option >Hogar</option>
                                            <option >Eléctricos</option>
                                            <option >Herramientas</option>
                                            <option >Tuberia</option>
                                            <option>Otros</option>
                                        </select>
                                    </div>
                                    <div className="element">
                                        <div className="label"><label htmlFor="codeproduct" className="form-label text-dark"> Código del producto</label></div>
                                        <input type="text" className="form-control" id="codeproduct" value={articuloEditar.codigo} />
                                    </div>
                                    <div className="element">
                                        <div className="label"><label htmlFor="precioProducto" className="form-label text-dark">Precio</label></div>
                                        <input type="text" className="form-control" id="precioProducto" value={articuloEditar.precio} />
                                    </div>
                                    <div className="element">
                                        <div className="label"><label htmlFor="cantidad" className="form-label text-dark">Cantidad</label></div>
                                        <input type="text" className="form-control" id="cantidad" value={articuloEditar.cantidad}/>
                                    </div>
                                    <div className="element">
                                        <div className="label"><label htmlFor="cantidad" className="form-label text-dark">Imagen</label></div>
                                        <input type="text" className="form-control" id="url" value={articuloEditar.url} />
                                    </div>
                                    <div className="element">
                                        <div className="label"><label htmlFor="fecha" className="text-dark form-label">Fecha de registro</label></div>
                                        <input type="date" className="form-control" id="fecha" value={articuloEditar.fecha}/>
                                    </div>
                                    <div className="element">
                                        <div className="label"><label htmlFor="articulodescripcion" className="form-label text-dark">Descripción</label></div>
                                        <textarea className="form-control" id="articulodescripcion" rows="3" value={articuloEditar.descripcion}></textarea>
                                    </div>
                                    <br />
                                    <button type="submit" className="btn btn-primary mt-4">Editar</button>
                                    <button type="submit" className="btn btn-primary mt-4" style={{ marginLeft: "4%" }} onClick = {()=> setEditar(false)}>Cancelar</button>
                                    </form>   
                                }
                            </div>

                            <div className="col-md-6">
                                <h2><font size="15"><b>Lista de Productos</b> </font></h2>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="producto" className="form-label" > <b>Nombre de producto</b></label>
                                        <input type="text" className="form-control" id="producto" aria-describedby="productoactual" value={buscarProducto} name="buscarProducto" onChange={event => setBuscar(event.target.value)} />
                                        <div id="emailHelp" className="form-text"></div>
                                    </div>
                                </form>
                                <br />

                                <div className="mb-3">
                                    <div className="table-responsive">
                                        <table className="table table-striped table-hover ">
                                            <thead className="thead-dark">
                                                <tr>
                                                    <td>Codigo</td>
                                                    <td>Nombre Producto</td>
                                                    <td>Stock</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {productosData.filter(i => i.nombre.toLowerCase().match(buscarProducto.toLowerCase())).map((i, index) => (
                                                    <tr key={index}>
                                                        <td>{i.codigo}</td>
                                                        <td>{i.nombre}</td>
                                                        <td>{i.cantidad}</td>
                                                        <td>
                                                            <button type="button" className="btn btn-warning" onClick={(()=> activarEdicion(i.codigo))}>Editar</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-danger" onClick={(() => borrarProducto(i._id, i.codigo))}>Eliminar</button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Dashboard