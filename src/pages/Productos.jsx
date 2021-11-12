import React, { useState } from "react";
import Layout from "layouts/Layout";
import "style/Productos.css";

function Productos() {

  const productosData = [
    {
      "_id": {
        "$oid": "61672412aeab4ac259d6619b"
      },
      "codigo": "149",
      "nombre": "Cinta Malla 20 Metros",
      "precio": " $ 2,600 ",
      "cantidad": "6",
      "fecha": "2021-04-20",
      "descripcion": "Cinta para uso en paredes de panel.",
      "categoria": "Otros",
      "url": "https://admintienda.coval.com.co/backend/admin/backend/web/archivosDelCliente/items/images/ACCESORIOS-CINTAS-CINTA-MALLA------------5-CM-X--20-M-DELT-170520210611060802.jpg"
    }, {
      "_id": {
        "$oid": "61672412aeab4ac259d661a0"
      },
      "codigo": "159",
      "nombre": "Clavo  3/4  Caja",
      "precio": " $ 3,500 ",
      "cantidad": "2",
      "fecha": "2021-04-20",
      "descripcion": "Clavos de alta resitencia para uso en diferentes superficies",
      "url": "https://indurruedas.co/wp-content/uploads/2017/12/DSC4803.jpg"
    }, {
      "_id": {
        "$oid": "61672412aeab4ac259d661af"
      },
      "codigo": "202",
      "nombre": "Espátula Goya Inox",
      "precio": " $ 5,000 ",
      "cantidad": "2",
      "fecha": "2021-04-20",
      "descripcion": "Fabricada en acero inoxidable, con mango antideslizante de polipropileno",
      "categoria": "Herramientas",
      "url": "https://myacenter.com/wp-content/uploads/2020/09/12204-600x600.jpg"
    }, {
      "_id": {
        "$oid": "61672412aeab4ac259d661c5"
      },
      "codigo": "305",
      "nombre": "Pistola Manguera 4 Chorros Uduke",
      "precio": " $ 5,000 ",
      "cantidad": "16",
      "fecha": "2021-04-20",
      "descripcion": "Pistola de riego con 4 funciones",
      "categoria": "Herramientas",
      "url": "https://uduke.co/toolsstore/wp-content/uploads/2021/03/7807-1.jpg"
    }, {
      "_id": {
        "$oid": "61672412aeab4ac259d6618f"
      },
      "codigo": "119",
      "nombre": "Brocha Brush 2\"",
      "precio": " $ 3,500 ",
      "cantidad": "17",
      "fecha": "2021-04-20",
      "descripcion": "Brocha de calidad garantizada, con cerdas naturales, mango plástico negro y una perforación en la punta para su fácil almacenamiento.",
      "categoria": "Herramientas",
      "url": "https://www.ferreteriasamir.com/5549-large_default/brocha-popular-brush-1-12-goya.jpg"
    }, {
      "_id": {
        "$oid": "61672412aeab4ac259d66192"
      },
      "codigo": "128",
      "nombre": "Caja 2X4",
      "precio": " $ 600 ",
      "cantidad": "7",
      "fecha": "2021-04-20",
      "descripcion": "Caja de material altamente resistente, autoextinguible que brinda proteccion a la toma electrica",
      "categoria": "Eléctricos",
      "url": "https://www.ferreteriasamir.com/43-large_default/caja-2x4-pvc-standar-retie-induma.jpg"
    }, {
      "_id": {
        "$oid": "61672412aeab4ac259d661c7"
      },
      "codigo": "254",
      "nombre": "Plafón Plástico",
      "precio": " $ 3,000 ",
      "cantidad": "4",
      "fecha": "2021-04-20",
      "descripcion": "plafon para iluminaciones electricas de alta resistencia a voltajes y sobrecargas",
      "categoria": "Eléctricos",
      "url": "https://e-mercury.com.co/wp-content/uploads/2020/10/ECA85-PLAFON-PLASTICO-E27-RETIE.jpg"
    }, {
      "_id": {
        "$oid": "61672412aeab4ac259d66188"
      },
      "codigo": "106",
      "nombre": "Adaptador Macho Presión",
      "precio": " $ 500 ",
      "cantidad": "4",
      "fecha": "2021-04-20",
      "descripcion": "Adpatador macho para tuberia de agua ",
      "categoria": "Tuberia",
      "url": "https://cr.epaenlinea.com/pub/media/version20200605/catalog/product/cache/a83b746ef25730b9cb1cc414bac0f04a/2/6/2615010_6.jpg"
    }, {
      "_id": {
        "$oid": "61672412aeab4ac259d661ae"
      },
      "codigo": "199",
      "nombre": "Espátula",
      "precio": " $ 2,500 ",
      "cantidad": "7",
      "fecha": "2021-04-20",
      "descripcion": "Fabricada en acero inoxidable, con mango antideslizante de polipropileno",
      "categoria": "Herramientas",
      "url": "https://sumatec.co/wp-content/uploads/2019/08/220025020-600x600.png"
    }, {
      "_id": {
        "$oid": "61672412aeab4ac259d661c6"
      },
      "codigo": "253",
      "nombre": "Plafón Loza",
      "precio": " $ 2,700 ",
      "cantidad": "5",
      "fecha": "2021-04-20",
      "descripcion": "plafon para iluminaciones electricas de alta resistencia a voltajes y sobrecargas",
      "categoria": "Eléctricos",
      "url": "https://electroservimos.co/2906-large_default/pgr-plafon-loza-casquillo-aluminio-retie-corona.jpg"
    }, {
      "_id": {
        "$oid": "61672412aeab4ac259d6619d"
      },
      "codigo": "154",
      "nombre": "Cinta Transparente Cellux 100 M",
      "precio": " $ 4,000 ",
      "cantidad": "15",
      "fecha": "2021-04-20",
      "descripcion": "Fabricadas con respaldo resistente a la tensión y adhesivo acrílico de alta fuerza de retención. Usos: Sellado de cajas de cartón, principalmente cajas pesadas, Embalaje de paquetes",
      "categoria": "Otros",
      "url": "https://images.jumpseller.com/store/universaldetornillosyherr/7147410/CINTA.jpg"
    }, {
      "_id": {
        "$oid": "61672412aeab4ac259d661a2"
      },
      "codigo": "174",
      "nombre": "Codo Presión",
      "precio": " $ 600 ",
      "cantidad": "2",
      "fecha": "2021-04-20",
      "descripcion": "Accesorio de tuberia de presion",
      "categoria": "Tuberia",
      "url": "https://ferreteriasurtillaves.com/wp-content/uploads/2019/09/codos.jpg"
    }, {
      "_id": {
        "$oid": "61672412aeab4ac259d661b1"
      },
      "codigo": "209",
      "nombre": "Grapa Muro Número",
      "precio": " $ 1,100 ",
      "cantidad": "4",
      "fecha": "2021-04-20",
      "descripcion": "Grapas para muro, soportes para cableados",
      "categoria": "Otros",
      "url": "https://cdn1.totalcode.net/easy/product-zoom/es/grapas-plastica-clavos-rojo-no.6-x100und-2.webp"
    }, {
      "_id": {
        "$oid": "61672412aeab4ac259d661bc"
      },
      "codigo": "234",
      "nombre": "Llave Lavamanos + Acople",
      "precio": " $ 18,500 ",
      "cantidad": "1",
      "fecha": "2021-04-20",
      "descripcion": "Grifería sencilla fabricada en polímeros de alta ingeniería, brindando un toque de elegancia, calidad y ahorro de consumo de agua en comparación a otras marcas.\n",
      "categoria": "Hogar",
      "url": "https://fullmineria.com/wp-content/uploads/2020/12/LLAVE-LAVAMANOS-CON-ACOPLE.jpg"
    }, {
      "_id": {
        "$oid": "61672412aeab4ac259d661be"
      },
      "codigo": "237",
      "nombre": "Llave Móvil Mesa Flexible",
      "precio": " $ 26,000 ",
      "cantidad": "3",
      "fecha": "2021-04-20",
      "descripcion": "Grifería sencilla fabricada en polímeros de alta ingeniería, brindando un toque de elegancia, calidad y ahorro de consumo de agua en comparación a otras marcas.\n",
      "categoria": "Hogar",
      "url": "https://www.carloseparamoltda.com/wp-content/uploads/MET-406-600x600.jpg"
    }, {
      "_id": {
        "$oid": "61672412aeab4ac259d661cc"
      },
      "codigo": "266",
      "nombre": "Sifón Lavamanos Completo Plastgri",
      "precio": " $ 5,600 ",
      "cantidad": "9",
      "fecha": "2021-04-20",
      "descripcion": "Reparaciones WC, tipo desagües, complemento de instalación de grifería, permite el adecuado desagüe, por si diseño evita los malos olores.",
      "categoria": "Tuberia",
      "url": "https://cdn1.totalcode.net/easy/product-zoom/es/conjunto-sifon-lavamanos-integral-con-rebose-cromo-1.webp"
    }
  ]

  const [carritoCompras, setCarrito] = useState([])
  const [buscarProducto, setBuscar] = useState('')

  function agregarCotizacion(codigo) {
    const agregarCarrito = productosData.find(id => id.codigo === codigo);
    agregarCarrito.carritoCantidad = 1;
    setCarrito([
      ...carritoCompras,
      agregarCarrito
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
                {/* <i className="fas fa-search"></i> */}
                <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" value={buscarProducto} name="buscarProducto" onChange={event => setBuscar(event.target.value)} />
              </li>
              <li className="nav-item">
                <button type="button" data-bs-toggle="modal" data-bs-target="#cotizar" id="cart-btn">
                  <i className="material-icons" id="cart">shopping_cart</i></button>
              </li>
            </ul>

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
                    <button type="button" className="btn btn-secondary ">Cancelar</button>
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
                  <div className="card m-auto shadow" style={{ width: "200px" }}>

                    {i[index] !== carritoCompras.find(e => e.nombre === i.nombre)
                      ? <button type="button" disabled><i className="fas fa-plus-square hvr-bounce-in" style={{ color: "green" }} id="plus"></i></button>
                      : <button type="button" className="tags" gloss="Añadir a cotización" onClick={() => agregarCotizacion(i.codigo)}><i className="fas fa-plus-square hvr-bounce-in" id="plus"></i></button>
                    }

                    <img src={i.url} className="card-img-top" alt="Imagen producto" id="imagenes-producto" />
                    <div className="card-body border-top text-start">
                      <h5 className="card-title color-marca">{i.nombre}</h5>
                      <p className="card-text text-black review__item__text">
                        {i.descripcion}
                      </p>
                      <h5 className="card-title text-black">{i.precio}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          </div>

          <div className="tab-pane fade" id="hogar" role="tabpanel" aria-labelledby="hogar-tab">
            <section className="row">
              {productosData.filter(i => i.nombre.toLowerCase().match(buscarProducto.toLowerCase()) && i.categoria === "Hogar").map((i, index) => (
                <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mt-5">
                  <div className="card m-auto shadow" style={{ width: "200px" }}>

                    {i[index] !== carritoCompras.find(e => e.nombre === i.nombre)
                      ? <button type="button" disabled><i className="fas fa-plus-square hvr-bounce-in" style={{ color: "green" }} id="plus"></i></button>
                      : <button type="button" className="tags" gloss="Añadir a cotización" onClick={() => agregarCotizacion(i.codigo)}><i className="fas fa-plus-square hvr-bounce-in" id="plus"></i></button>
                    }


                    <img src={i.url} className="card-img-top" alt="Imagen producto" id="imagenes-producto" />
                    <div className="card-body border-top text-start">
                      <h5 className="card-title color-marca">{i.nombre}</h5>
                      <p className="card-text text-black review__item__text">
                        {i.descripcion}
                      </p>
                      <h5 className="card-title text-black">{i.precio}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          </div>

          <div className="tab-pane fade" id="electricos" role="tabpanel" aria-labelledby="electricos-tab">
            <section className="row">
              {productosData.filter(i => i.nombre.toLowerCase().match(buscarProducto.toLowerCase()) && i.categoria === "Eléctricos").map((i, index) => (
                <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mt-5">
                  <div className="card m-auto shadow" style={{ width: "200px" }}>
                    {i[index] !== carritoCompras.find(e => e.nombre === i.nombre)
                      ? <button type="button" disabled><i className="fas fa-plus-square hvr-bounce-in" style={{ color: "green" }} id="plus"></i></button>
                      : <button type="button" className="tags" gloss="Añadir a cotización" onClick={() => agregarCotizacion(i.codigo)}><i className="fas fa-plus-square hvr-bounce-in" id="plus"></i></button>
                    }
                    <img src={i.url} className="card-img-top" alt="Imagen producto" id="imagenes-producto" />
                    <div className="card-body border-top text-start">
                      <h5 className="card-title color-marca">{i.nombre}</h5>
                      <p className="card-text text-black review__item__text">
                        {i.descripcion}
                      </p>
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
                  <div className="card m-auto shadow" style={{ width: "200px" }}>
                    {i[index] !== carritoCompras.find(e => e.nombre === i.nombre)
                      ? <button type="button" disabled><i className="fas fa-plus-square hvr-bounce-in" style={{ color: "green" }} id="plus"></i></button>
                      : <button type="button" className="tags" gloss="Añadir a cotización" onClick={() => agregarCotizacion(i.codigo)}><i className="fas fa-plus-square hvr-bounce-in" id="plus"></i></button>
                    }
                    <img src={i.url} className="card-img-top" alt="Imagen producto" id="imagenes-producto" />
                    <div className="card-body border-top text-start">
                      <h5 className="card-title color-marca">{i.nombre}</h5>
                      <p className="card-text text-black review__item__text">
                        {i.descripcion}
                      </p>
                      <h5 className="card-title text-black">{i.precio}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          </div>

          <div className="tab-pane fade" id="tuberias" role="tabpanel" aria-labelledby="tuberias-tab">
            <section className="row">
              {productosData.filter(i => i.nombre.toLowerCase().match(buscarProducto.toLowerCase()) && i.categoria === "Tuberia").map((i, index) => (
                <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mt-5">
                  <div className="card m-auto shadow" style={{ width: "200px" }}>
                    {i[index] !== carritoCompras.find(e => e.nombre === i.nombre)
                      ? <button type="button" disabled><i className="fas fa-plus-square hvr-bounce-in" style={{ color: "green" }} id="plus"></i></button>
                      : <button type="button" className="tags" gloss="Añadir a cotización" onClick={() => agregarCotizacion(i.codigo)}><i className="fas fa-plus-square hvr-bounce-in" id="plus"></i></button>
                    }
                    <img src={i.url} className="card-img-top" alt="Imagen producto" id="imagenes-producto" />
                    <div className="card-body border-top text-start">
                      <h5 className="card-title color-marca">{i.nombre}</h5>
                      <p className="card-text text-black review__item__text">
                        {i.descripcion}
                      </p>
                      <h5 className="card-title text-black">{i.precio}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          </div>

          <div className="tab-pane fade" id="otros" role="tabpanel" aria-labelledby="otros-tab">
            <section className="row">
              {productosData.filter(i => i.nombre.toLowerCase().match(buscarProducto.toLowerCase()) && i.categoria === "Otros").map((i, index) => (
                <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mt-5">
                  <div className="card m-auto shadow" style={{ width: "200px" }}>
                    {i[index] !== carritoCompras.find(e => e.nombre === i.nombre)
                      ? <button type="button" disabled><i className="fas fa-plus-square hvr-bounce-in" style={{ color: "green" }} id="plus"></i></button>
                      : <button type="button" className="tags" gloss="Añadir a cotización" onClick={() => agregarCotizacion(i.codigo)}><i className="fas fa-plus-square hvr-bounce-in" id="plus"></i></button>
                    }
                    <img src={i.url} className="card-img-top" alt="Imagen producto" id="imagenes-producto" />
                    <div className="card-body border-top text-start">
                      <h5 className="card-title color-marca">{i.nombre}</h5>
                      <p className="card-text text-black review__item__text">
                        {i.descripcion}
                      </p>
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

