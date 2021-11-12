import { Link } from "react-router-dom"

function Footer() {
    return (
        <footer className="footer mt-auto text-white bg-black p-3">
            <div className="container-fluid">
                <div className="d-lg-flex justify-content-lg-center">
                    <div className=" ">
                        {año() + " "}
                        &copy;  Carvajal Materiales | Todos los derechos reservados.
                    </div>
                    <div id="redes-sociales" className="mx-4">
                        <a style={{ marginLeft: "6px" }} className="text-white" href="https://www.facebook.com/Carvajalmateriales" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                        <a style={{ marginLeft: "6px" }} className="text-white" href="https://www.instagram.com/carvajalmateriales/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                        <a style={{ marginLeft: "6px" }} className="text-white" href="https://api.whatsapp.com/send?phone=%2B573003659340&fbclid=IwAR1Fs2TmR-vYJG0c8c1zhm4XzCFEJjWr2zbsaMjivUyG2SCrSoFVYx49qwA" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
                    </div>
                    <div className="">
                        <Link to="/login" className="admin text-white text-decoration-none hvr-bounce-in">Administrador</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

function año() {
    return (
        new Date().getFullYear()
    )
}

export default Footer