import { Navigate } from "react-router-dom";
import axios from "axios"

function PrivateRoute({ children }) {

    function verificarUser() {
        axios.get("/auth/verificar-user")
        .then((res) => {
            return res.data.role
        })
    }

    const rol = 3
    /* console.log(rol) */
    return rol > 1 ? children : <Navigate to="/login" />
}

export default PrivateRoute
