
import "style/bootstrap.css"
import "style/styles.css"
import Layout from "layouts/Layout"
import { Link } from "react-router-dom"
import background from "media/bg3.jpg"

function Index() {
    return (
        <Layout>
            <div>
                <div className="bg-black bg-opacity-50 bg-cover bg-filter"></div>
                <div className="bg-cover" style={{ backgroundImage: `url(${background})` }}></div>
                <div className="container mx-auto">
                    <section className="row d-flex justify-content-evenly ">
                        <div className="col-lg-4 my-auto">
                            <h1 className="color-marca">Carvajal Materiales</h1>
                            <p className="lead">
                                ¡Bienvenidos! Carvajal Materiales te provee
                                materiales de construcción para que cumplas tus
                                proyectos de remodelación para tu hogar y productos de
                                ferretería en general.
                                ¡¡Ven a conocernos y contruyamos juntos!!
                            </p>
                            <Link to="/productos" className="btn btn-primary">Ver productos</Link>
                        </div>
                    </section>
                </div>
            </div>
        </Layout>
    )
}

export default Index