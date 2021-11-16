import Layout from "layouts/Layout"

function Login(){

    return(
        <Layout>
            <div className="container mx-auto">
                <section className="row d-flex">

                    <div className="col-10 col-lg-5 mx-auto">

                        <form action="server" method="POST">
                            <div className="contenedor">
                                <h2 className="mt-3">Login</h2>
                                <div className="fontuser element">
                                    <div className="label"><label for="email">Usuario</label></div>
                                    <input id="usuario" type="text" name="usuario" placeholder="Escriba su usuario" v-model= "usuario"/><br/>
                                </div>
                                <div className="element fontpass">
                                    <div className="label"><label for="password">Contraseña</label></div>
                                    <input id="password" type="password" name="password" placeholder="Escriba su contraseña" v-model= "contraseña"/>
                                </div><br />
                               
                    
                                <input id="boton" className="btn btn-primary" type="submit" value="Iniciar sesión"/>
                            </div>
                        </form>

                    </div>

                    

                    <div className="col-10 col-lg-5 mx-auto">

                        <form action="server" method="POST">
                            <div className="registro">
                                <h2 className="mt-3">Registro</h2>
                                <div className="fontuser element">
                                    <br />
                                    <div className="label"><label for="nombre">Nombre</label></div>
                                    <input id="nombre" type="text" name="nombre" placeholder="Escriba su nombre" v-model= "nombre"/><br/>
                                </div>
                                <div className="fontuser element">
                                    <br />
                                    <div className="label"><label for="email">Correo</label></div>
                                    <input id="email" type="email" name="email" placeholder="Escriba su email" v-model= "email"/><br/>
                                </div>


                                <div className="fontuser element">
                                    <br />
                                    <div className="label"><label for="email">Usuario</label></div>
                                    <input id="usuario" type="text" name="usuario" placeholder="Escriba su usuario" v-model= "usuario"/><br/>
                                </div><br />
                                <div className="element fontpass">
                                    <div className="label"><label for="password">Contraseña</label></div>
                                    <input id="password" type="password" name="password" placeholder="Escriba su contraseña" v-model= "contraseña"/>
                                </div><br />
                                

                                <input id="boton" className="btn btn-primary" type="submit" value="Iniciar sesión"/>
                            </div>
                        </form>

                    </div>

                
            </section>    
            </div>



            
        </Layout>
    )

}

export default Login