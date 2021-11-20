/* import "style/dashboard.css" */
import React, { useState, useEffect } from "react";
import axios from "axios"
import logo from "media/logo.png"
import Footer from "components/Footer"

function Dashboard() {


    const [productosData,setProductosData] = useState([])

    useEffect(() => {
        axios.get("/listar-articulos")
        .then((response) =>{
          setProductosData(response.data)
        })
    },[])

    return (
        <body>
            <div className="container-fluid">
                <div className="row  ">
                    <div className="col-md-2 barra2">
                        <img className="image" src={logo} alt=""/>
                    </div>
                    <div className="col-md-10 text-right barra">
                        <ul className="navbar-nav mr-auto">
                            <li>
                                <a href="/#" className="px-3 text-light perfil dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="far fa-user-circle"></i></a>

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
                            <div className="col-md-6" >
                                <h2> <font size="15"><b>Crear Producto</b> </font></h2>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="producto" className="form-label"> <b> Nombre de producto </b></label>
                                        <input type="text" className="form-control" id="producto" aria-describedby="productoactual" />
                                        <div id="emailHelp" className="form-text"></div>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="producto" className="form-label"> <b> Categoria </b></label>
                                        <select type="text" className="form-control" id="producto" aria-describedby="productoactual" />
                                        <div id="emailHelp" className="form-text"></div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="codeproduct" className="form-label"> <b>Codigo Producto</b></label>
                                        <input type="text" className="form-control" id="codeproduct" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="precioProducto" className="form-label"> <b>Precio</b></label>
                                        <input type="number" className="form-control" id="precioProducto" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="precioProducto" className="form-label"> <b>Cantidad a registrar</b></label>
                                        <input type="number" className="form-control" id="precioProducto" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="precioProducto" className="form-label"> <b>Fecha de registro</b></label>
                                        <input type="date" className="form-control" id="precioProducto" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="articulodescripcion" className="form-label"> <b>Descripcion Articulo</b></label>
                                        <textarea className="form-control" id="articulodescripcion" rows="3"></textarea>
                                    </div>
                                    <br />
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" htmlFor="exampleCheck1">Confirmar</label>
                                    </div>
                                    <br />
                                    <button type="submit" className="btn btn-primary">Crear Producto</button>
                                </form>
                            </div>

                            <div className="col-md-6">
                                <h2><font size="15"><b>Lista de Productos</b> </font></h2>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="producto" className="form-label" > <b>Nombre de producto</b></label>
                                        <input type="text" className="form-control" id="producto" aria-describedby="productoactual" />
                                        <div id="emailHelp" className="form-text"></div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="codeproduct" className="form-label"> <b>Codigo Producto </b></label>
                                        <input type="text" className="form-control" id="codeproduct" />
                                    </div>
                                    <br />
                                    <button type="submit" className="btn btn-primary">Buscar Producto</button>
                                </form>
                                <br />

                                <div className="mb-3">
                                    <div className="table-responsive">
                                        <table className="table table-striped table-hover ">
                                            <thead className="thead-dark">
                                                <tr>
                                                    <th>Codigo</th>
                                                    <th>Nombre Producto</th>
                                                    <th>Stock</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {productosData.map((i,index)=>(
                                                    <tr key={index}>
                                                        <td>{i.codigo}</td>
                                                        <td>{i.nombre}</td>
                                                        <td>{i.cantidad}</td>
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
        </body>
    )
}

export default Dashboard