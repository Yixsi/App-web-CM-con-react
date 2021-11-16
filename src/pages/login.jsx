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
                                {/* <div className="element mb-3">        
                                    <div className="label"><label>Mensaje</label></div>
                                    <textarea id="comment" name="comment" rows="2" placeholder="Escribe tu mensaje aquí..." required></textarea>
                                </div> */}
                    
                                <input id="boton" className="btn btn-primary" type="submit" value="Iniciar sesión"/>
                            </div>
                        </form>

                    </div>

                    {/* <div className="col-12 col-lg-6 mx-auto">
                        <aside id="info">
                            <article className="mt-3">
                                <h2>Visítanos</h2>
                                <p>CL 14D #43A-34 Manzanares I<br/>Poblado campestre, Candelaria<br/>Cali, Colombia</p>
                            </article>
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
                    </div> */}
                    

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
                                {/* <div className="element mb-3">        
                                    <div className="label"><label>Mensaje</label></div>
                                    <textarea id="comment" name="comment" rows="2" placeholder="Escribe tu mensaje aquí..." required></textarea>
                                </div> */}

                                <input id="boton" className="btn btn-primary" type="submit" value="Iniciar sesión"/>
                            </div>
                        </form>

                    </div>

                
            </section>    
            </div>



            {/* <div className="container mx-auto">

                <div className= "container mx-auto">
                    <section className="col-9 col-lg-4 mx-auto">
                        <form  method="POST">
                            <div className="contenedor">
                                <h2>Login</h2>
                                <div className=" fontuser element">
                                    <i className="fas fa-user"></i>
                                    <div className="label"><label for="email">Usuario</label></div>
                                    <input id="usuario" type="text" name="usuario" placeholder="Escriba su usuario" v-model= "usuario"/><br/>
                                </div>
                                <div className="element fontpass">
                                    <i className="fas fa-key"></i>
                                    <div className="label"><label for="password">Contraseña</label></div>
                                    <input id="password" type="password" name="password" placeholder="Escriba su contraseña" v-model= "contraseña"/><br/>
                                </div>
                                <div className="element">
                                    <p className="text-dark"></p>
                                </div>
                                <input id="boton" className="btn btn-primary" type="submit" value="Iniciar sesión"/>
                            </div>
                        </form>
                    </section>
        
                </div>
                
                
                    
                <div className="col-10 col-lg-5 mx-auto">

                            <form action="server" method="POST">
                                <div className="registro">
                                    <h2 className="mt-3">Registro</h2>
                                    <div className="element mb-3">
                                        <div className="label"><label>Nombre</label></div>
                                        <input type="text" id="nombre" name="nombre" placeholder="Escribe tu nombre" required/>
                                    </div>
                                    <div className="element mb-3">
                                        <div className="label" ><label>Correo</label></div>
                                        <input type="email" id="email" name="email" placeholder="Escribe tu correo..." required/>
                                    </div>
                                    <div className="element mb-3">        
                                        <div className="label"><label>Usuario</label></div>
                                        <input type="text" id="usuario" name="usuario"  placeholder="Escribe Un Nombre De Usuario ..." required></input>
                                    </div>

                                    <input className="btn btn-primary" type="submit" value="Registrarse"/>
                                </div>
                            </form>

                </div>

            </div> */}

        </Layout>
    )

}

export default Login