import Layout from "layouts/Layout"
import "style/Contacto.css" 

function Contacto() {
    return (
        <Layout>
            <div className="container contacto mx-auto">
                <div className="row contacto">          
                    <div  className="company-info col-12 col-md-5 col-lg-5 mx-auto">
                        <h3>ConstruYAmos Juntos</h3>

                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497.84716963153454!2d-76.46305866263394!3d3.404403267443681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a75decc564f1%3A0xabd7ff7f12628a5b!2sCarvajal%20Materiales!5e0!3m2!1ses!2sco!4v1638569892876!5m2!1ses!2sco" title = "mapa" style={{border:"0"}} allowFullScreen="" loading="lazy"></iframe>
                            
                        <ul>
                            <li><i  className="fa fa-road"></i> CL 14D #43A-34 Manzanares I Poblado campestre, Candelaria - Cali, Colombia.</li>
                            <li><i  className="fa fa-phone"></i> (300) 365-9340</li>
                            <li><i  className="fa fa-envelope"></i> carvajalmateriales@hotmail.com</li>
                        </ul>
                    </div>

                    <div  className="contact col-12 col-md-7 col-lg-7 mx-auto">
                        <h3>Contáctanos</h3>

                        <form id="contact-form">

                            <div className="element mb-3">
                                <label>Nombre</label>
                                <input type="text" id="name" name="name" required/>
                            </div>
                                
                            <div className="element mb-3">
                                <label>Apellido</label>
                                <input type="text" id="surname" name="surname" required/>
                            </div>
                                
                            <div className="element mb-3">
                                    <label>E-mail</label>
                                    <input type="email" id="email" name="email" required/>
                            </div>
                            <div className="element mb-3">
                                    <label>Teléfono</label>
                                    <input type="numeric" id="phone" name="phone" required/>
                            </div>
                            <div className="full element mb-3">        
                                    <label>Mensaje</label>
                                    <textarea id="comment" name="comment" rows="2" required></textarea>
                            </div>
                            <div className="full">
                                <button classname="btn" type="submit">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Contacto