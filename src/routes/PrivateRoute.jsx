import useAuth from "auth/useAuth"
import {Navigate} from "react-router-dom"

export default function PrivateRoute({children,hasRole:role}){


    const {hasRole} = useAuth();
    role = parseInt(role)

    if (!hasRole(role)) return <Navigate to="/login" />
    else return children

    /* return role > 1 ? children : <Navigate to="/login" /> */
}