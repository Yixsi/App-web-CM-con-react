import React, { useState, useEffect } from "react";
import axios from "axios"
import Footer from "components/Footer"
import Header from "components/HeaderDashboard"
import BarraLateral from "components/DashboardBarraLateral"

function Dashboard() {

    const [buscarProducto, setBuscar] = useState('')
    const [productosData, setProductosData] = useState([])
    const [editar, setEditar] = useState(false)

    const [cantidad, setCantidad] = useState('')
    const [categoria, setCategoria] = useState('')
    const [codigo, setCodigo] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [fecha, setFecha] = useState('')
    const [nombre, setNombre] = useState('')
    const [precio, setPrecio] = useState('')
    const [url, setUrl] = useState('')
    const [id, setId] = useState('')

    useEffect(() => {
        axios.get("/api/listar-articulos")
            .then((response) => {
                setProductosData(response.data)
            })
    }, [])

    function activarEdicion(codigo) {
        setEditar(true)
        const producto = productosData.filter(e => e.codigo === codigo)
        setNombre(producto[0].nombre)
        setCantidad(producto[0].cantidad)
        setCategoria(producto[0].categoria)
        setCodigo(producto[0].codigo)
        setDescripcion(producto[0].descripcion)
        setFecha(producto[0].fecha)
        setPrecio(producto[0].precio)
        setUrl(producto[0].url)
        setId(producto[0]._id)
    }

    function editarProducto(e) {
        const producto = {
            nombre, cantidad, categoria, codigo, descripcion, fecha, precio, url, id
        }
        axios.put(`/api/editar-articulo/${producto.id}`, producto)
            .then(res => {
                setNombre("")

                setEditar(false)
            })
    }

    function borrarProducto(id, codigo) {
        axios.delete(`/api/borrar-articulo/${id}`)
            .then(res => {
                const borrarCarrito = productosData.filter((id) => id.codigo !== codigo);
                setProductosData(borrarCarrito)
            })
    }

    return (
        <div>
            
            <Header></Header>

            <div className="container-fluid">
                <div className="row">

                    <BarraLateral/>

                    <main className="main col">
                        <div className="row justify-content-center align-content-center text-center d-flex">
                            <div className="col-md-5 mx-auto" >

                                {editar === false

                                    ? <form className="No editar-prueba">
                                        <h2> <font size="15"><b>Crear Producto</b> </font></h2>

                                        <div className="element">
                                            <div className="label"><label htmlFor="producto" className="form-label text-dark">Nombre</label></div>
                                            <input type="text" className="form-control" id="producto" aria-describedby="productoactual" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                                            <div id="emailHelp" className="form-text"></div>
                                        </div>

                                        <div className="element">
                                            <div className="label"><label htmlFor="categoria" className="form-label text-dark">Categoría</label></div>
                                            <select className="form-select" aria-label="Default select example" value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                                                <option defaultValue="Hogar">Hogar</option>
                                                <option value="Eléctricos">Eléctricos</option>
                                                <option value="Herramientas">Herramientas</option>
                                                <option value="Tuberia">Tuberia</option>
                                                <option value="Otros">Otros</option>
                                            </select>
                                        </div>
                                        <div className="element">
                                            <div className="label"><label htmlFor="codeproduct" className="form-label text-dark"> Código del producto</label></div>
                                            <input type="text" className="form-control" id="codeproduct" value={codigo} onChange={(e) => setCodigo(e.target.value)} />
                                        </div>
                                        <div className="element">
                                            <div className="label"><label htmlFor="precioProducto" className="form-label text-dark">Precio</label></div>
                                            <input type="text" className="form-control" id="precioProducto" value={precio} onChange={(e) => setPrecio(e.target.value)} />
                                        </div>
                                        <div className="element">
                                            <div className="label"><label htmlFor="cantidad" className="form-label text-dark">Cantidad</label></div>
                                            <input type="text" className="form-control" id="cantidad" value={cantidad} onChange={(e) => setCantidad(e.target.value)} />
                                        </div>
                                        <div className="element">
                                            <div className="label"><label htmlFor="cantidad" className="form-label text-dark">Imagen</label></div>
                                            <input type="text" className="form-control" id="url" value={url} onChange={(e) => setUrl(e.target.value)} />
                                        </div>
                                        <div className="element">
                                            <div className="label"><label htmlFor="fecha" className="text-dark form-label">Fecha de registro</label></div>
                                            <input type="date" className="form-control" id="fecha" value={fecha} onChange={(e) => setFecha(e.target.value)} />
                                        </div>
                                        <div className="element">
                                            <div className="label"><label htmlFor="articulodescripcion" className="form-label text-dark">Descripción</label></div>
                                            <textarea className="form-control" id="articulodescripcion" rows="3" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}></textarea>
                                        </div>
                                        <br />
                                        <button  className="btn btn-primary mt-4">Agregar</button>

                                    </form>

                                    : <form onSubmit={editarProducto} className="Editar-SoloVer">

                                        <h2>Editar Producto</h2>
                                        <div className="element">
                                            <div className="label"><label htmlFor="producto" className="form-label text-dark">Nombre</label></div>
                                            <input type="text" className="form-control" id="producto" aria-describedby="productoactual" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                                            <div id="emailHelp" className="form-text"></div>
                                        </div>

                                        <div className="element">
                                            <div className="label"><label htmlFor="categoria" className="form-label text-dark">Categoría</label></div>
                                            <select className="form-select" aria-label="Default select example" value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                                                <option defaultValue="Hogar">Hogar</option>
                                                <option value="Eléctricos">Eléctricos</option>
                                                <option value="Herramientas">Herramientas</option>
                                                <option value="Tuberia">Tuberia</option>
                                                <option value="Otros">Otros</option>
                                            </select>
                                        </div>
                                        <div className="element">
                                            <div className="label"><label htmlFor="codeproduct" className="form-label text-dark"> Código del producto</label></div>
                                            <input type="text" className="form-control" id="codeproduct" value={codigo} onChange={(e) => setCodigo(e.target.value)} />
                                        </div>
                                        <div className="element">
                                            <div className="label"><label htmlFor="precioProducto" className="form-label text-dark">Precio</label></div>
                                            <input type="text" className="form-control" id="precioProducto" value={precio} onChange={(e) => setPrecio(e.target.value)} />
                                        </div>
                                        <div className="element">
                                            <div className="label"><label htmlFor="cantidad" className="form-label text-dark">Cantidad</label></div>
                                            <input type="text" className="form-control" id="cantidad" value={cantidad} onChange={(e) => setCantidad(e.target.value)} />
                                        </div>
                                        <div className="element">
                                            <div className="label"><label htmlFor="cantidad" className="form-label text-dark">Imagen</label></div>
                                            <input type="text" className="form-control" id="url" value={url} onChange={(e) => setUrl(e.target.value)} />
                                        </div>
                                        <div className="element">
                                            <div className="label"><label htmlFor="fecha" className="text-dark form-label">Fecha de registro</label></div>
                                            <input type="date" className="form-control" id="fecha" value={fecha} onChange={(e) => setFecha(e.target.value)} />
                                        </div>
                                        <div className="element">
                                            <div className="label"><label htmlFor="articulodescripcion" className="form-label text-dark">Descripción</label></div>
                                            <textarea className="form-control" id="articulodescripcion" rows="3" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}></textarea>
                                        </div>
                                        <br />
                                        <button type="submit" className="btn btn-primary mt-4">Editar</button>
                                        <button className="btn btn-primary mt-4" style={{ marginLeft: "4%" }} onClick={() => setEditar(false)}>Cancelar</button>
                                    </form>
                                }
                            </div>

                            <div className="col-md-6">
                                <h2><font size="15"><b>Lista de Productos</b> </font></h2>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="producto" className="form-label" > <b style = {{color: "black"}}>Nombre de producto</b></label>
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
                                                            <button type="button" className="btn btn-warning" onClick={(() => activarEdicion(i.codigo))}>Editar</button>
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