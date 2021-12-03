import Layout from "layouts/Layout"
import "style/Contacto.css" 

function Contacto() {
    return (
        <Layout>
            <div  className="container mx-auto mt-5 mb-5">

                <h1  className="brand"><span>Phoenix Web Design</span></h1>

                <div  className="wrapper">

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
            </div>
        </Layout>
    )
}

export default Contacto