import Layout from "layouts/Layout"
import "style/Contacto.css" 

function Contacto() {
    return (
        <Layout>
<<<<<<< HEAD
            <div className="container mx-auto">
                <section className="row d-flex">
                
                    {/* <section className="tarjeta row mb-5 .bg-dark col-lg-4 col-md-6 col-sm-12">
                        <br />
                        <div className="wrapper mx-auto">
                            <div className="card " style={{ width: "400px" }} >
                                <img  alt="" src="https://trabajosyempleosargentina.com.ar/wp-content/uploads/2020/11/vendedor-administrativo.jpg"/>
                                <div className="info">
                                <h1>Visítanos</h1>
                                <p>CL 14D #43A-34 Manzanares I<br/>Poblado campestre, Candelaria<br/>Cali, Colombia</p>
                                </div>
                            </div>
                            
                        </div>
                    </section>

                    <div className="col-10 col-lg-5 mx-auto">

                        <form action="server" method="POST">
                            <div className="contacto">
                                <br />
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
=======
            <div  className="container mx-auto mt-5 mb-5">
>>>>>>> 230813e3acbcb8b17876284c3941fbfb7e2c288f

                <h1  className="brand"><span>Phoenix Web Design</span></h1>

                <div  className="wrapper">

<<<<<<< HEAD
                   

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
 */}
                </section>
=======
                    <div  className="company-info">
                        <h3>Phoenix Web Design</h3>

                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497.84716963153454!2d-76.46305866263394!3d3.404403267443681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a75decc564f1%3A0xabd7ff7f12628a5b!2sCarvajal%20Materiales!5e0!3m2!1ses!2sco!4v1638569892876!5m2!1ses!2sco" 
                            title = "mapa" style={{border:"0"}} allowFullScreen="" loading="lazy">
                        </iframe>

                        <ul>
                            <li><i  className="fa fa-road"></i> 44 Main Street</li>
                            <li><i  className="fa fa-phone"></i> (555) 555-5555</li>
                            <li><i  className="fa fa-envelope"></i> test@phoenix.com</li>
                        </ul>
                    </div>
                    <div  className="contact">
                        <h3>E-mail Us</h3>

                        <form id="contact-form">

                            <p>
                                <label>Name</label>
                                <input type="text" name="name" id="name" required />
                            </p>

                            <p>
                                <label>Company</label>
                                <input type="text" name="company" id="company" />
                            </p>

                            <p>
                                <label>E-mail Address</label>
                                <input type="email" name="email" id="email" required />
                            </p>

                            <p>
                                <label>Phone Number</label>
                                <input type="text" name="phone" id="phone" />
                            </p>

                            <p  className="full">
                                <label>Message</label>
                                <textarea name="message" rows="5" id="message"></textarea>
                            </p>

                            <p  className="full">
                                <button type="submit">Submit</button>
                            </p>

                        </form>
                    </div>

                </div>
>>>>>>> 230813e3acbcb8b17876284c3941fbfb7e2c288f
            </div>
        </Layout>
    )
}

export default Contacto