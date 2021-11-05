import Layout from "layouts/Layout"
import "style/Articulos.css"

function Articulos(){
    return(
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
                                <a className="nav-link" id="tutoriales-tab" data-bs-toggle="tab" data-bs-target="#tutoriales"
                                    type="button" href="/#" role="tab" aria-controls="tutoriales" aria-selected="true">Tutoriales</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="noticias-tab" data-bs-toggle="tab" data-bs-target="#noticias"
                                    type="button" href="/#" role="tab" aria-controls="noticias" aria-selected="true">Noticias</a>
                            </li>
                            <li className="nav-item">
                                    <a className="nav-link" id="consejos-tab" data-bs-toggle="tab" data-bs-target="#consejos"
                                        type="button" href="/#" role="tab" aria-controls="consejos" aria-selected="true">Consejos</a>
                                </li>
                        </ul>
                    </section>
                </div>

                <div className="tab-content">
                    <div className="tab-pane fade show active" id="todos" role="tabpanel" aria-labelledby="todos-tab">
                        <section className="row">
                            <div className="col-12 col-lg-4 mt-5">
                                <div className="card m-auto shadow" style= {{width: "340px"}}>
                                    <img className="card-img-top" alt="Imagen articulo" style= {{height: "200px"}}/>
                                    <div className="card-body border-top text-start">
                                        <h6 className="card-title color-marca">Clase</h6>                                    
                                        <h5 className="card-title text-black">Titulo</h5>
                                        <p className="card-text text-black">
                                            Descripcion
                                            <a  href = "item.url" className="text-danger">  Leer más...</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="tab-pane fade" id="tutoriales" role="tabpanel" aria-labelledby="tutoriales-tab">
                        <section className="row">
                            <div className="col-12 col-lg-4 mt-5">
                                <div className="card m-auto shadow" style={{width: "340px"}}>
                                    <img src= "item.img" className="card-img-top" alt="Imagen articulo" style={{height: "300px"}}/>
                                        <div className="card-body border-top text-start">
                                            <h6 className="card-title color-marca">Clase</h6>                                    
                                            <h5 className="card-title text-black">Titulo</h5>
                                            <p className="card-text text-black review__articulo__text">
                                                Descripcion 
                                            </p>
                                            <a href = "item.url" className="text-danger">  Leer más...</a>
                                        </div>
                                </div>
                            </div>
                        </section>
                    </div>   

                    <div className="tab-pane fade" id="noticias" role="tabpanel" aria-labelledby="noticias-tab">
                        <section className="row">
                            <div v-for = "item in forNoticias" className="col-12 col-lg-4 mt-5">
                                <div className="card m-auto shadow" style= {{width: "340px"}}>
                                    <img src= "item.img" className="card-img-top" alt="Imagen articulo" style={{height: "300px"}}/>
                                        <div className="card-body border-top text-start">
                                            <h6 className="card-title color-marca">Clase</h6>                                    
                                            <h5 className="card-title text-black">Titulo</h5>
                                            <p className="card-text text-black review__articulo__text">
                                                Descripcion <a  href = "item.url" className="text-danger">  Leer más...</a>
                                            </p>
                                        </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="tab-pane fade" id="consejos" role="tabpanel" aria-labelledby="consejos-tab">
                        <section className="row">
                            <div className="col-12 col-lg-4 mt-5">
                                <div className="card m-auto shadow" style= {{width: "340px"}}>
                                    <img className="card-img-top" alt="Imagen articulo" style= {{height: "200px"}}/>
                                        <div className="card-body border-top text-start">
                                            <h6 className="card-title color-marca">Clase</h6>                                    
                                            <h5 className="card-title text-black">Titulo</h5>
                                            <p className="card-text text-black review__articulo__text">
                                                Descripcion
                                            </p>
                                            <a href = "item.url" className="text-danger">  Leer más...</a>
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

export default Articulos