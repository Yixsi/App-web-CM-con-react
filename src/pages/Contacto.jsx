import Layout from "layouts/Layout"


function Contacto(){
    return(
        <Layout>
            <div className="container mx-auto">
                <section className="row d-flex">

                    <div className="col-10 col-lg-5 mx-auto">

                        <form action="server" method="POST">
                            <div className="contacto">
                                <h2 className="mt-3">Contáctanos</h2>
                                <div className="element mb-3">
                                    <div className="label"><label>Asunto</label></div>
                                    <input type="text" id="asunto" name="asunto" placeholder="Escribe el asunto..." required/>
                                </div>
                                <div className="element mb-3">
                                    <div className="label"><label>Correo</label></div>
                                    <input type="email" id="email" name="email" placeholder="Escribe tu correo..." required/>
                                </div>
                                <div className="element mb-3">        
                                    <div className="label"><label>Mensaje</label></div>
                                    <textarea id="comment" name="comment" rows="2" placeholder="Escribe tu mensaje aquí..." required></textarea>
                                </div>
                    
                                <input className="btn btn-primary" type="submit" value="Enviar"/>
                            </div>
                        </form>

                    </div>

                    <section className="tarjeta row mb-5 .bg-dark col-lg-4 col-md-6 col-sm-12">
                    <div className="wrapper mx-auto">
                        <div className="card">
                            <img alt="" src="https://image.freepik.com/foto-gratis/vendedor-cuenta-sobre-producto_85574-8279.jpg"/>
                            <div className="info">
                            <h1>Visítanos</h1>
                            <p>CL 14D #43A-34 Manzanares I<br/>Poblado campestre, Candelaria<br/>Cali, Colombia</p>
                            </div>
                        </div>
                        
                    </div>
                    </section>

                    <div className="col-12 col-lg-6 mx-auto">
                        <aside id="info">
                            <br/>
                            <article className="mb-2">
                                <h2>Síguenos</h2>
                                <div className="mx-auto">
                                    <a href="https://www.facebook.com/Carvajalmateriales"><i className="fab fa-facebook" style= {{color: "blue"}}></i></a><p className="d-inline" style= {{color: "black"}}> Facebook</p><br/>
                                    <a href="https://www.instagram.com/carvajalmateriales/"><i className="fab fa-instagram" style={{color: "red"}}></i></a><p className="d-inline" style= {{color: "black"}}> Instagram</p><br/>
                                    <a href="https://api.whatsapp.com/send?phone=%2B573003659340&fbclid=IwAR1Fs2TmR-vYJG0c8c1zhm4XzCFEJjWr2zbsaMjivUyG2SCrSoFVYx49qwA"><i className="fab fa-whatsapp" style= {{color: "rgb(102, 233, 102)"}}></i></a><p className="d-inline" style= {{color: "black"}}> Whatsapp</p><br/>
                                </div>
                            </article>
                        </aside>
                    </div>

                </section>
            </div>
        </Layout>
    )
}

export default Contacto