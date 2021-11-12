import Layout from "layouts/Layout"

function Login() {

    return (
        <Layout>

            <div className="container mx-auto">
                <section className="col-9 col-lg-4 mx-auto">
                    <form method="POST">
                        <div className="contenedor">
                            <h2>Acceso a Dashboard</h2>
                            <div className=" fontuser element">
                                <i className="fas fa-user"></i>
                                <div className="label"><label for="email">Usuario</label></div>
                                <input id="usuario" type="text" name="usuario" placeholder="Escriba su usuario" v-model="usuario" /><br />
                            </div>
                            <div className="element fontpass">
                                <i className="fas fa-key"></i>
                                <div className="label"><label for="password">Contraseña</label></div>
                                <input id="password" type="password" name="password" placeholder="Escriba su contraseña" v-model="contraseña" /><br />
                            </div>
                            <div className="element">
                                <p className="text-dark">Hola</p>
                            </div>
                            <input id="boton" className="btn btn-primary" type="submit" value="Iniciar sesión" />
                        </div>
                    </form>
                </section>
            </div>

        </Layout>
    )

}

export default Login