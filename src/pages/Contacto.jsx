import Layout from "layouts/Layout";
import "style/contacto.css";

function Contacto() {
  return (
    <Layout>
      <div className="container mx-auto">
        <section className="row d-flex">
          <div class="grid">
            <form action="/" method="post" class="form login">
              <header class="login__header">
                <h3 class="login__title">Contáctanos</h3>
              </header>
              <div class="login__body">
                <div class="form__field">
                  <input type="email" placeholder="Email" required></input>
                </div>
                <div class="form__field">
                  <input type="email" placeholder="Asunto" required></input>
                </div>
                <div class="form__field">
                  <input type="email" placeholder="Mensaje" required></input>
                </div>
              </div>
              <footer class="login__footer">
                <input type="submit" value="Enviar"></input>
              </footer>
            </form>
          </div>

          <section className="tarjeta row mb-5 .bg-dark col-lg-4 col-md-6 col-sm-12">
            <div className="wrapper mx-auto">
              <div className="card">
                <img src="https://image.freepik.com/foto-gratis/vendedor-cuenta-sobre-producto_85574-8279.jpg" />
                <div className="info">
                  <h1>Visítanos</h1>
                  <p>
                    CL 14D #43A-34 Manzanares,
                    <br />
                    Poblado campestre, Candelaria
                    <br />
                    Cali, Colombia
                  </p>
                  <a href="https://www.facebook.com/Carvajalmateriales">
                    <i
                      className="fab fa-facebook"
                      style={{ color: "blue" }}
                    ></i>
                  </a>
                  <p className="d-inline" style={{ color: "white" }}>
                    {" "}
                    Facebook
                  </p>
                  <br />
                  <a href="https://www.instagram.com/carvajalmateriales/">
                    <i
                      className="fab fa-instagram"
                      style={{ color: "red" }}
                    ></i>
                  </a>
                  <p className="d-inline" style={{ color: "white" }}>
                    {" "}
                    Instagram
                  </p>
                  <br />
                  <a href="https://api.whatsapp.com/send?phone=%2B573003659340&fbclid=IwAR1Fs2TmR-vYJG0c8c1zhm4XzCFEJjWr2zbsaMjivUyG2SCrSoFVYx49qwA">
                    <i
                      className="fab fa-whatsapp"
                      style={{ color: "rgb(102, 233, 102)" }}
                    ></i>
                  </a>
                  <p className="d-inline" style={{ color: "white" }}>
                    {" "}
                    Whatsapp
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </Layout>
  );
}

export default Contacto;
