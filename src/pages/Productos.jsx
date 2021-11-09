import Layout from "layouts/Layout"
/* import NavTabs from "components/Tabs" */
import imgProducto from "media/producto.png"
import "style/Productos.css"

function Productos(){
    return(
        <Layout>
            <div className="container mx-auto mt-5 mb-5">nav

                {/* <NavTabs></NavTabs> */}

                <div className="row">

                    <section className="col-md-10 mx-auto">
                        <ul className="nav nav-tabs nav-tabsp nav-fill" id="productos" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="todos-tab" data-bs-toggle="tab" data-bs-target="#todos"
                                    type="button" href="/#" role="tab" aria-controls="todos" aria-selected="true">Todos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="materiales-tab" data-bs-toggle="tab" data-bs-target="#materiales"
                                    type="button" href="/#" role="tab" aria-controls="materiales" aria-selected="true">Hogar</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="electricos-tab" data-bs-toggle="tab" data-bs-target="#electricos"
                                    type="button" href="/#"  role="tab" aria-controls="electricos" aria-selected="true">Eléctricos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="maderas-tab" data-bs-toggle="tab" data-bs-target="#maderas"
                                    type="button" href="/#" role="tab" aria-controls="maderas" aria-selected="true">Herramientas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="tuberias-tab" data-bs-toggle="tab" data-bs-target="#tuberias"
                                    type="button" href="/#" role="tab" aria-controls="tuberias" aria-selected="true">Tuberías</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="otros-tab" data-bs-toggle="tab" data-bs-target="#otros"
                                    type="button" href="todos" role="tab" aria-controls="otros" aria-selected="true">Otros</a>
                            </li>
                            <li className="nav-item fontsearch" style={{marginLeft: "4%"}}>
                                    {/* <i className="fas fa-search"></i> */}
                                    <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" v-model= "buscarProducto"/>
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
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" style= {{backgroundColor: "white"}}>
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
                                                <tr>
                                                    <td></td>
                                                    <td>
                                                        <button ><i className="fas fa-minus hvr-push" style= {{paddingRight: "12px"}}></i></button><button ><i className="fas fa-plus hvr-push" style={{paddingLeft: "12px"}}></i></button>
                                                    </td>
                                                    <td></td>
                                                    <td>
                                                        <button><i className="fas fa-trash-alt hvr-push"></i></button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                            <tfoot style= {{borderBottom: "hidden"}}>
                                                <tr>
                                                    <td></td>
                                                    <td style= {{fontWeight: "bolder"}}>Total</td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td>No tienes productos en el carrito</td>
                                                </tr>
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
                            <div v-for= "item in filtrarArticulos" className="col-12 col-sm-6 col-md-4 col-lg-3 mt-5">
                                <div className="card m-auto shadow" style= {{width: "200px"}}>
                                    <button type="button" className="tags" gloss="Añadir a cotización"><i className="fas fa-plus-square hvr-bounce-in" id="plus"></i></button>
                                    <img src = {imgProducto} className="card-img-top" alt="Imagen producto" id="imagenes-producto"/>
                                    <div className="card-body border-top text-start">
                                        <h5 className="card-title color-marca">Hola</h5>
                                        <p className="card-text text-black review__item__text">
                                            Descripcion
                                        </p>
                                        <h5 className="card-title text-black">99999</h5>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="tab-pane fade" id="materiales" role="tabpanel" aria-labelledby="materiales-tab">
                        <section className="row">
                            <div v-for= "item in forHogar"   className="col-12 col-md-4 col-lg-3 mt-5">
                                <div  className="card m-auto shadow" style= {{width: "200px"}}>
                                    <button type="button" className="tags" gloss="Añadir a cotización"><i className="fas fa-plus-square hvr-bounce-in" id="plus"></i></button>
                                    <img src= "item.url" className="card-img-top" alt="Imagen producto" id="imagenes-producto"/>
                                    <div className="card-body border-top text-start">
                                        <h5 className="card-title color-marca">Hola</h5>
                                        <p className="card-text text-black review__item__text">
                                            
                                        </p>
                                        <h5 className="card-title text-black">Hola</h5>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="tab-pane fade" id="electricos" role="tabpanel" aria-labelledby="electricos-tab">
                        <section className="row">
                            <div v-for= "item in forElectricos" className="col-12 col-md-4 col-lg-3 mt-5">
                                <div className="card m-auto shadow" style= {{width: "200px"}}>
                                    <button type="button" className="tags" gloss="Añadir a cotización"><i className="fas fa-plus-square hvr-bounce-in" id="plus"></i></button>
                                    <img src= "item.url" className="card-img-top" alt="Imagen producto" id="imagenes-producto"/> 
                                    <div className="card-body border-top text-start">
                                        <h5 className="card-title color-marca">Hola</h5>
                                        <p className="card-text text-black review__item__text">
                                            
                                        </p>
                                        <h5 className="card-title text-black review__item__text">Hola</h5>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="tab-pane fade" id="maderas" role="tabpanel" aria-labelledby="maderas-tab">
                        <section className="row">
                            <div v-for= "item in forHerramientas" className="col-12 col-md-4 col-lg-3 mt-5">
                                <div className="card m-auto shadow" style = {{width: "200px"}}>
                                    <button type="button" className="tags" gloss="Añadir a cotización"><i className="fas fa-plus-square hvr-bounce-in" id="plus"></i></button>
                                    <img src= "item.url" className="card-img-top" alt="Imagen producto" id="imagenes-producto"/>
                                    <div className="card-body border-top text-start">
                                        <h5 className="card-title color-marca">Hola</h5>
                                        <p  className="card-text text-black review__item__text">
                                            
                                        </p>
                                        <h5 className="card-title text-black">Hola</h5>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="tab-pane fade" id="tuberias" role="tabpanel" aria-labelledby="tuberias-tab">
                        <section className="row">
                            <div v-for= "item in forTuberias"  className="col-12 col-md-4 col-lg-3 mt-5">
                                <div className="card m-auto shadow" style= {{width: "200px"}}>
                                    <button type="button" className="tags" gloss="Añadir a cotización"><i className="fas fa-plus-square hvr-bounce-in" id="plus"></i></button>
                                    <img src= "item.url" className="card-img-top" alt="Imagen producto" id="imagenes-producto"/>
                                    <div className="card-body border-top text-start">
                                        <h5 className="card-title color-marca">Hola</h5>
                                        <p className="card-text text-black review__item__text">
                                            
                                        </p>
                                        <h5 className="card-title text-black">Hola</h5>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="tab-pane fade" id="otros" role="tabpanel" aria-labelledby="otros-tab">
                        <section className="row">
                            <div v-for= "item in forOtros" className="col-12 col-md-4 col-lg-3 mt-5">
                                <div className="card m-auto shadow" style = {{width: "200px"}}>
                                    <button type="button" className="tags" gloss="Añadir a cotización" ><i className="fas fa-plus-square hvr-bounce-in" id="plus"></i></button>
                                    <img src= "item.url" className="card-img-top" alt="Imagen producto" id="imagenes-producto"/>
                                    <div className="card-body border-top text-start">
                                        <h5 className="card-title color-marca">Hola</h5>
                                        <p className="card-text text-black review__item__text">
                                            
                                        </p>
                                        <h5 className="card-title text-black">Hola</h5>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default Productos