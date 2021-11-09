import 'bootstrap/dist/css/bootstrap.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';



export default function NavTabs() {
    return (
        <div class = "row">
            <section className="col-md-10 mx-auto nav-tabsp nav-tabs nav-fill">

                <Tabs defaultActiveKey="first">

                    <Tab eventKey="first" title="Todos">
                        
                        <section className="row">
                            <div v-for= "item in filtrarArticulos" className="col-12 col-sm-6 col-md-4 col-lg-3 mt-5 ">
                                <div className="card m-auto shadow" style= {{width: "200px"}}>
                                    <button type="button" className="tags" gloss="Añadir a cotización"><i className="fas fa-plus-square hvr-bounce-in" id="plus"></i></button>
                                    <img src = "https://indurruedas.co/wp-content/uploads/2017/12/DSC4803.jpg" className="card-img-top" alt="Imagen producto" id="imagenes-producto"/>
                                    <div className="card-body border-top text-start">
                                        <h5 className="card-title color-marca">Clavo 3/4 Caja</h5>
                                        <p className="card-text text-black review__item__text">
                                            Clavos de alta resistencia para uso en diferentes superficies
                                        </p>
                                        <h5 className="card-title text-black">$ 3,500</h5>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </Tab>

                    <Tab eventKey="second" title="Hogar">
                        
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

                    </Tab>

                    <Tab eventKey="third" title="Eléctricos">
                        
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
                        
                    </Tab>

                    <Tab eventKey="ford" title="Herramientas">
                        
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

                    </Tab>

                    <Tab eventKey="five" title="Tuberías">
                        
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

                    </Tab>

                    <Tab eventKey="sex" title="Otros">

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

                    </Tab>
                </Tabs>
            </section>
        </div>
    );
}
