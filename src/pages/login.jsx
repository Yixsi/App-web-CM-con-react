import Layout from "layouts/Layout"

function Login(){

    return(
        <Layout>

            <div class= "container mx-auto">
                <section class="col-9 col-lg-4 mx-auto">
                    <form  method="POST">
                        <div class="contenedor">
                            <h2>Acceso a Dashboard</h2>
                            <div class=" fontuser element">
                                <i class="fas fa-user"></i>
                                <div class="label"><label for="email">Usuario</label></div>
                                <input id="usuario" type="text" name="usuario" placeholder="Escriba su usuario" v-model= "usuario"/><br/>
                            </div>
                            <div class="element fontpass">
                                <i class="fas fa-key"></i>
                                <div class="label"><label for="password">Contraseña</label></div>
                                <input id="password" type="password" name="password" placeholder="Escriba su contraseña" v-model= "contraseña"/><br/>
                            </div>
                            <div class="element">
                                <p class="text-dark">Hola</p>
                            </div>
                            <input id="boton" class="btn btn-primary" type="submit" value="Iniciar sesión"/>
                        </div>
                    </form>
                </section>
            </div>

        </Layout>
    )

}

export default Login