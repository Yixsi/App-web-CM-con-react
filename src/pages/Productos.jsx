import React, { useState, useEffect } from "react";
import Layout from "layouts/Layout";
import axios from "axios"
import "style/Productos.css";



function Productos() {

  const [productosData, setProductosData] = useState([])

  useEffect(() => {
    axios.get("/api/listar-articulos")
      .then((response) => {
        setProductosData(response.data)
      })
  }, [])

  const [carritoCompras, setCarrito] = useState([])
  const [buscarProducto, setBuscar] = useState('')
  const [productosModal, setModal] = useState({})
  const [num, setNum] = useState(1)

  function agregarCotizacion(producto) {
    producto.carritoCantidad = num;
    setCarrito([
      ...carritoCompras,
      producto
    ])
  }

  function eliminarProducto(codigo) {
    const borrarCarrito = carritoCompras.filter((id) => id.codigo !== codigo);
    setCarrito(borrarCarrito)
  }

  function totalCarrito() {
    let a = 0;
    let b;
    carritoCompras.forEach(element => {
      b = element.precio
      b = b.replace("$", "")
      b = b.replace(",", "")
      a += parseInt(b) * element.carritoCantidad;
    });
    return new Intl.NumberFormat('es-MX').format(a);
  }

  function agergarCantidadCarrito(codigo) {
    const productos = carritoCompras.map(p => {
      if (p.codigo === codigo) {
        p.carritoCantidad += 1
        return p
      }
      return p
    })
    setCarrito(productos)
  }

  function eliminarCantidadCarrito(codigo) {
    const productos = carritoCompras.map(p => {
      if (p.codigo === codigo) {
        p.carritoCantidad -= 1
        return p
      }
      return p
    })
    setCarrito(productos)
  }

  function vaciarArray() {
    const borrar = carritoCompras.splice()
    setCarrito(borrar)
  }

  return (
    <Layout>
      <div className="container mx-auto mt-5 mb-5">
        <div className="row">

          <section className="col-md-10 mx-auto">
            <ul className="nav nav-tabs nav-tabsp nav-fill" id="productos" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" id="todos-tab" data-bs-toggle="tab" data-bs-target="#todos"
                  type="button" href="/#" role="tab" aria-controls="todos" aria-selected="true">Todos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="hogar-tab" data-bs-toggle="tab" data-bs-target="#hogar"
                  type="button" href="/#" role="tab" aria-controls="hogar" aria-selected="true">Hogar</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="electricos-tab" data-bs-toggle="tab" data-bs-target="#electricos"
                  type="button" href="/#" role="tab" aria-controls="electricos" aria-selected="true">Eléctricos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="herramientas-tab" data-bs-toggle="tab" data-bs-target="#herramientas"
                  type="button" href="/#" role="tab" aria-controls="herramientas" aria-selected="true">Herramientas</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="tuberias-tab" data-bs-toggle="tab" data-bs-target="#tuberias"
                  ype="button" href="/#" role="tab" aria-controls="tuberias" aria-selected="true">Tuberías</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="otros-tab" data-bs-toggle="tab" data-bs-target="#otros"
                  type="button" href="todos" role="tab" aria-controls="otros" aria-selected="true">Otros</a>
              </li>
              <li className="nav-item fontsearch" style={{ marginLeft: "4%" }}>
                <i className="fas fa-search"></i>
                <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" value={buscarProducto} name="buscarProducto" onChange={event => setBuscar(event.target.value)} />
              </li>
              <li className="nav-item">
                <button type="button" data-bs-toggle="modal" data-bs-target="#cotizar" id="cart-btn">
                  <i className="material-icons" id="cart">shopping_cart</i></button>
              </li>
            </ul>

            {/* MODAL COTIZACIÓN */}
            <div className="modal fade" tabIndex="-1" id="cotizar" aria-hidden="true" aria-labelledby="cotizacion">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content text-dark">

                  <div className="modal-header">
                    <h5 className="modal-title" id="cotizacion">Cotización</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{ backgroundColor: "white" }}>
                    </button>
                  </div>

                  <div className="modal-body">
                    <table className="table table-hover">
                      <thead className="table-light" id="thead">
                        <tr>
                          <th>Producto</th>
                          <th className="cantidad">Cantidad</th>
                          <th>Costo</th>
                          <th></th>
                        </tr>
                      </thead>

                      <tbody>
                        {carritoCompras.map((i, index) => (
                          <tr key={index}>
                            <td>{i.nombre}</td>
                            <td>
                              <button onClick={() => eliminarCantidadCarrito(i.codigo)} disabled={i.carritoCantidad === 1}><i className="fas fa-minus hvr-push" style={{ paddingRight: "12px" }}></i></button>
                              {i.carritoCantidad}
                              <button onClick={() => agergarCantidadCarrito(i.codigo)} disabled={i.carritoCantidad >= carritoCompras[index].cantidad}><i className="fas fa-plus hvr-push" style={{ paddingLeft: "12px" }}></i></button>
                            </td>
                            <td>{i.precio}</td>
                            <td>
                              <button onClick={() => eliminarProducto(i.codigo)}><i className="fas fa-trash-alt hvr-push"></i></button>
                            </td>
                          </tr>
                        ))}
                      </tbody>

                      <tfoot style={{ borderBottom: "hidden" }}>
                        {carritoCompras.length !== 0
                          ? <tr>
                            <td></td>
                            <td style={{ fontWeight: "bolder" }}>Total</td>
                            <td>{totalCarrito()}</td>
                          </tr>

                          : <tr>
                            <td></td>
                            <td>No tienes productos en el carrito</td>
                          </tr>
                        }

                      </tfoot>
                    </table>
                  </div>

                  <div className="modal-footer">
                    <button type="button" className="btn2">Guardar</button>
                    <button type="button" className="btn btn-secondary " onClick={() => vaciarArray()}>Cancelar</button>
                  </div>

                </div>
              </div>
            </div>

            {/* MODAL PRODUCTO DESCRIPCIÓN */}
            <div className="modal  fade modal-producto" tabIndex="-1" id="producto" aria-hidden="true" aria-labelledby="producto">
              <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content text-dark">
                  <div className="modal-header">
                    <h5 className="modal-title" id="detail">Detalle del producto</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{ backgroundColor: "white" }}>
                    </button>
                  </div>
                  <div className="modal-body">
                    <section className="row">
                      <div className="image col-12 col-md-6 col-lg-6 mx-auto mt-3">
                        <img className="ImagenModal" alt="ImagenModal" src={productosModal.url} style={{ heigh: "300px", width: "250px" }} />
                      </div>
                      <div className="card cardproducto col-12 col-md-5 col-lg-5 mx-auto">
                        <div className="card-body border-top text-start">
                          <h5 className="card-title color-marca" style={{ fontWeight: "bold" }}>{productosModal.nombre}</h5>
                          <p className="card-text text-black ">
                            {productosModal.descripcion}
                          </p>
                          <h5 className="card-title text-black">{productosModal.precio}</h5>
                          <button disabled={num === 1} onClick={() => setNum(num - 1)}><i className="fas fa-minus hvr-push" style={{ paddingRight: "12px" }}></i></button>
                          {num}
                          <button disabled={num >= productosModal.cantidad} onClick={() => setNum(num + 1)}><i className="fas fa-plus hvr-push" style={{ paddingLeft: "12px", paddingRight: "20px" }}></i></button>
                          <p className="stock">En stock:{"  " + productosModal.cantidad}</p>
                        </div>
                      </div>
                    </section>
                  </div>

                  <div className="modal-footer">
                    {productosModal !== carritoCompras.find(e => e.nombre === productosModal.nombre)
                      ? <button type="button" className="btn2" onClick={() => agregarCotizacion(productosModal)}>Agregar a cotización</button>
                      : <button type="button" className="btn3" disabled={true}>Agregado</button>}

                    <button type="button" className="btn btn-secondary " onClick={() => eliminarProducto(productosModal.codigo)}>Cancelar</button>
                  </div>

                </div>
              </div>
            </div>
          </section>

        </div>

        <div className="tab-content">

          <div className="tab-pane fade show active" id="todos" role="tabpanel" aria-labelledby="todos-tab">
            <section className="row">
              {productosData.filter(i => i.nombre.toLowerCase().match(buscarProducto.toLowerCase())).map((i, index) => (
                <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mt-5">
                  <div className="card m-auto shadow" style={{ width: "230px" }}>

                    {i[index] !== carritoCompras.find(e => e.nombre === i.nombre)
                      ? <button type="button" className="tags" gloss="Eliminar cotización" onClick={() => eliminarProducto(i.codigo)} ><i className="fas fa-minus-square hvr-bounce-in" style={{ color: "green" }} id="plus"></i></button>
                      : <button type="button" className="tags" gloss="Añadir a cotización" onClick={() => agregarCotizacion(i)}><i className="fas fa-plus-square hvr-bounce-in" id="plus"></i></button>
                    }

                     <img src={i.url} className="card-img-top" onClick={() => { setNum(1); setModal(i) }} alt="Imagen producto" id="imagenes-producto" data-bs-toggle="modal" data-bs-target="#producto" style={{ cursor: "pointer" }} />
                    <div className="card-body border-top text-start" onClick={() => { setNum(1); setModal(i) }} data-bs-toggle="modal" data-bs-target="#producto" style={{ cursor: "pointer" }}>
                      <h5 className="card-title color-marca">{i.nombre}</h5>
                      <h5 className="card-title text-black">{i.precio}</h5>

                    </div>
                  </div>
                </div>
              ))}
            </section>
          </div>

          <div className="tab-pane fade" id="hogar" role="tabpanel" aria-labelledby="hogar-tab" >
            <section className="row">
              {productosData.filter(i => i.nombre.toLowerCase().match(buscarProducto.toLowerCase()) && i.categoria === "Hogar").map((i, index) => (
                <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mt-5">
                  <div className="card m-auto shadow" style={{ width: "230px" }}>

                    {i[index] !== carritoCompras.find(e => e.nombre === i.nombre)
                      ? <button type="button" className="tags" gloss="Eliminar cotización" onClick={() => eliminarProducto(i.codigo)} ><i className="fas fa-minus-square hvr-bounce-in" style={{ color: "green" }} id="plus"></i></button>
                      : <button type="button" className="tags" gloss="Añadir a cotización" onClick={() => agregarCotizacion(i)}><i className="fas fa-plus-square hvr-bounce-in" id="plus"></i></button>
                    }


                    <img src={i.url} className="card-img-top" onClick={() => { setNum(1); setModal(i) }} alt="Imagen producto" id="imagenes-producto" data-bs-toggle="modal" data-bs-target="#producto" style={{ cursor: "pointer" }} />
                    <div className="card-body border-top text-start" onClick={() => { setNum(1); setModal(i) }} data-bs-toggle="modal" data-bs-target="#producto" style={{ cursor: "pointer" }}>
                      <h5 className="card-title color-marca">{i.nombre}</h5>
                      <h5 className="card-title text-black">{i.precio}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          </div>

          <div className="tab-pane fade" id="electricos" role="tabpanel" aria-labelledby="electricos-tab" data-bs-toggle="modal" data-bs-target="#producto" style={{ cursor: "pointer" }}>
            <section className="row">
              {productosData.filter(i => i.nombre.toLowerCase().match(buscarProducto.toLowerCase()) && i.categoria === "Electricos").map((i, index) => (
                <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mt-5">
                  <div className="card m-auto shadow" style={{ width: "230px" }}>
                    {i[index] !== carritoCompras.find(e => e.nombre === i.nombre)
                      ? <button type="button" className="tags" gloss="Eliminar cotización" onClick={() => eliminarProducto(i.codigo)} ><i className="fas fa-minus-square hvr-bounce-in" style={{ color: "green" }} id="plus"></i></button>
                      : <button type="button" className="tags" gloss="Añadir a cotización" onClick={() => agregarCotizacion(i)}><i className="fas fa-plus-square hvr-bounce-in" id="plus"></i></button>
                    }
                     <img src={i.url} className="card-img-top" onClick={() => { setNum(1); setModal(i) }} alt="Imagen producto" id="imagenes-producto" data-bs-toggle="modal" data-bs-target="#producto" style={{ cursor: "pointer" }} />
                    <div className="card-body border-top text-start" onClick={() => { setNum(1); setModal(i) }} data-bs-toggle="modal" data-bs-target="#producto" style={{ cursor: "pointer" }}>
                      <h5 className="card-title color-marca">{i.nombre}</h5>
                      <h5 className="card-title text-black">{i.precio}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          </div>

          <div className="tab-pane fade" id="herramientas" role="tabpanel" aria-labelledby="herramientas-tab">
            <section className="row">
              {productosData.filter(i => i.nombre.toLowerCase().match(buscarProducto.toLowerCase()) && i.categoria === "Herramientas").map((i, index) => (
                <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mt-5">
                  <div className="card m-auto shadow" style={{ width: "230px" }}>
                    {i[index] !== carritoCompras.find(e => e.nombre === i.nombre)
                      ? <button type="button" className="tags" gloss="Eliminar cotización" onClick={() => eliminarProducto(i.codigo)} ><i className="fas fa-minus-square hvr-bounce-in" style={{ color: "green" }} id="plus"></i></button>
                      : <button type="button" className="tags" gloss="Añadir a cotización" onClick={() => agregarCotizacion(i)}><i className="fas fa-plus-square hvr-bounce-in" id="plus"></i></button>
                    }
                     <img src={i.url} className="card-img-top" onClick={() => { setNum(1); setModal(i) }} alt="Imagen producto" id="imagenes-producto" data-bs-toggle="modal" data-bs-target="#producto" style={{ cursor: "pointer" }} />
                    <div className="card-body border-top text-start" onClick={() => { setNum(1); setModal(i) }} data-bs-toggle="modal" data-bs-target="#producto" style={{ cursor: "pointer" }}>
                      <h5 className="card-title color-marca">{i.nombre}</h5>
                      <h5 className="card-title text-black">{i.precio}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          </div>

          <div className="tab-pane fade" id="tuberias" role="tabpanel" aria-labelledby="tuberias-tab" data-bs-toggle="modal" data-bs-target="#producto" style={{ cursor: "pointer" }}>
            <section className="row">
              {productosData.filter(i => i.nombre.toLowerCase().match(buscarProducto.toLowerCase()) && i.categoria === "Tuberia").map((i, index) => (
                <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mt-5">
                  <div className="card m-auto shadow" style={{ width: "230px" }}>
                    {i[index] !== carritoCompras.find(e => e.nombre === i.nombre)
                      ? <button type="button" className="tags" gloss="Eliminar cotización" onClick={() => eliminarProducto(i.codigo)} ><i className="fas fa-minus-square hvr-bounce-in" style={{ color: "green" }} id="plus"></i></button>
                      : <button type="button" className="tags" gloss="Añadir a cotización" onClick={() => agregarCotizacion(i)}><i className="fas fa-plus-square hvr-bounce-in" id="plus"></i></button>
                    }
                     <img src={i.url} className="card-img-top" onClick={() => { setNum(1); setModal(i) }} alt="Imagen producto" id="imagenes-producto" data-bs-toggle="modal" data-bs-target="#producto" style={{ cursor: "pointer" }} />
                    <div className="card-body border-top text-start" onClick={() => { setNum(1); setModal(i) }} data-bs-toggle="modal" data-bs-target="#producto" style={{ cursor: "pointer" }}>
                      <h5 className="card-title color-marca">{i.nombre}</h5>
                      <h5 className="card-title text-black">{i.precio}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          </div>

          <div className="tab-pane fade" id="otros" role="tabpanel" aria-labelledby="otros-tab" data-bs-toggle="modal" data-bs-target="#producto" style={{ cursor: "pointer" }}>
            <section className="row">
              {productosData.filter(i => i.nombre.toLowerCase().match(buscarProducto.toLowerCase()) && i.categoria === "Otros").map((i, index) => (
                <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mt-5">
                  <div className="card m-auto shadow" style={{ width: "230px" }}>
                    {i[index] !== carritoCompras.find(e => e.nombre === i.nombre)
                      ? <button type="button" className="tags" gloss="Eliminar cotización" onClick={() => eliminarProducto(i.codigo)} ><i className="fas fa-minus-square hvr-bounce-in" style={{ color: "green" }} id="plus"></i></button>
                      : <button type="button" className="tags" gloss="Añadir a cotización" onClick={() => agregarCotizacion(i)}><i className="fas fa-plus-square hvr-bounce-in" id="plus"></i></button>
                    }
                     <img src={i.url} className="card-img-top" onClick={() => { setNum(1); setModal(i) }} alt="Imagen producto" id="imagenes-producto" data-bs-toggle="modal" data-bs-target="#producto" style={{ cursor: "pointer" }} />
                    <div className="card-body border-top text-start" onClick={() => { setNum(1); setModal(i) }} data-bs-toggle="modal" data-bs-target="#producto" style={{ cursor: "pointer" }}>
                      <h5 className="card-title color-marca">{i.nombre}</h5>
                      <h5 className="card-title text-black">{i.precio}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          </div>

        </div>
      </div>
    </Layout>
  )
}

export default Productos

