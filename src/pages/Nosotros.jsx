import Layout from "layouts/Layout"
import "style/bootstrap.css"
import carvajal from "media/Carvajal.jpeg"

function Nosotros(params) {
    return(
        <Layout>
            <div className="container mx-auto mt-5 mb-5">

                <section className="row mb-5 .bg-dark">
                <div className="wrapper mx-auto">
                    <div className="card col-lg-4 col-md-6 col-sm-12"><img src="https://images.squarespace-cdn.com/content/v1/53c4566ae4b047b01385cdb6/1542663621032-QSYRS85LCRJXVIGWYBVY/julio_ferreterias_mar23.jpg?format=1000w"/>
                        <div className="info">
                        <h1>¿Quiénes somos?</h1>
                        <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
                        <button>Read More</button>
                        </div>
                    </div>
                    <div className="card col-lg-4 col-md-6 col-sm-12"><img src="https://img.freepik.com/foto-gratis/pareja-joven-haciendo-reparacion-apartamentos-juntos-ellos-mismos-hombre-mujer-casados-haciendo-remodelacion-o-renovacion-casa-concepto-relaciones-familia-amor-midiendo-pared-preparandose-diseno_155003-19797.jpg?size=626&ext=jpg"/>
                        <div className="info">
                        <h1>Misión</h1>
                        <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
                        <button>Read More</button>
                        </div>
                    </div>
                    <div className="card col-lg-4 col-md-6 col-sm-12"><img src="https://img.freepik.com/foto-gratis/constructor-masculino-probandose-casco-estante-ferreteria-constructor-uniforme-mirar-productos-tienda-bricolaje_266732-20737.jpg?size=626&ext=jpg"/>
                        <div className="info">
                        <h1>Visión</h1>
                        <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
                        <button>Read More</button>
                        </div>
                    </div>
                    </div>
                </section>

                {/* <section className="row d-flex justify-content-evenly text-black ">   
                        <div className="col-10 col-md-5 my-auto card text-start" >
                            <div className="card-body">
                                <h1 className="color-marca card-title">¿Quiénes somos?</h1>
                                <p className="lead card-text">
                                    Somos una empresa dedicada a la distribución de productos eléctricos y de ferretería a los diferentes municipios 
                                    del Valle del Cauca, mediante el innovador y eficiente servicio; generando progreso y estabilidad a nuestros 
                                    colaboradores, ya que ellos hacen posible la existencia de nuestra empresa y  siendo así un aliado estratégico de 
                                    nuestros clientes a la hora de remodelar sus hogares.
                                </p>
                                <p className="lead ">
                                    Nuestra compañía inicia un proceso comercial en la ciudad de candelaria, donde se vio  un gran potencial  por su 
                                    expansión gracias los nuevos proyectos de vivienda, actualmente buscamos  ser los mejores aliados de los propietarios 
                                    de las viviendas y ser partícipes en hacer cumplir los sueños de los clientes ofreciendo una gran variedad de productos 
                                    para la remodelación de sus hogares.
                                </p>
                            </div>
                        </div>
                        <div className="col-10 col-md-5 my-auto text-start card">
                            <div className="card-body">
                                <h2 className="color-marca card-title">Misión</h2>
                                <p className="lead">
                                    Ofrecer productos de calidad a nuestros clientes, contribuyendo a la mejora de sus viviendas y cumpliendo sus 
                                    sueños de remodelar su hogar.
                                </p>
                                <h2 className="color-marca card-title">Visión</h2>
                                <p className="lead">
                                    Ser reconocidos como una empresa responsable con sus clientes, que brinda buen servicio y ofrece productos de 
                                    calidad a nuestros clientes. Ser el mejor aliado del ferretero al proveer materiales de construcción y 
                                    productos de ferretería.
                                </p>
                            </div>
                        </div>
                </section> */}

            </div>
        </Layout>
    )
}

export default Nosotros