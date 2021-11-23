import Layout from "layouts/Layout"
import React,{useState} from "react"


function Login(){

    const [ on,setOn] = useState(false)

    return(
        <Layout>
            <div className="container mx-auto">
                <section className="row d-flex">
                    <div className="col-10 col-lg-7 mx-auto">

                    <form action="server" method="POST">
                            <div className="contenedor">

                        <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
                            <div className={`container1${on ? " log-in":""}`}>
                                <div className="box"></div>
                                <div className="container1-forms">
                                    <div className="container1-info">
                                    <div className="info-item">
                                        <div className="table">
                                        <div className="table-cell">
                                            <p style ={{color:"white"}}>
                                            ¿YA tienes una cuenta?
                                            </p>
                                            <div className="btn"  onClick = {()=> setOn(false)}>
                                            Log in
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="info-item">
                                        <div className="table">
                                        <div className="table-cell">
                                            <p style ={{color:"white"}}>
                                            ¿No tienes cuenta?
                                            </p>
                                            <div className="btn " onClick = {()=> setOn(true)}>
                                            Registro
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="container1-form">
                                    <div className="form-item log-in">
                                        <div className="table">
                                        <div className="table-cell">
                                            <input name="Username" placeholder="Usuario" type="text" /><input name="Password" placeholder="Contraseña" type="Password" />
                                            <div className="btn">
                                            Log in
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="form-item sign-up">
                                        <div className="table">
                                        <div className="table-cell">
                                            <input name="email" placeholder="Email" type="text" /><input name="fullName" placeholder="Nombre Completo" type="text" /><input name="Username" placeholder="Usuario" type="text" /><input name="Password" placeholder="Contraseña" type="Password" />
                                            <div className="btn">
                                            Regitrarse
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>        

        </Layout>
    )

}

export default Login


// codigo anterior

{/* <div className="container mx-auto">
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
            </div> */}