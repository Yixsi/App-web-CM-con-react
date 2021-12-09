import { useEffect, useState } from "react";
import { createContext } from "react";
import axios from "axios"

export const AuthContext = createContext()

export default function AuthProvider({ children }) {

    const [user, setUser] = useState()

    useEffect(() => {
        axios.get("/auth/verificar-user")
            .then((res) => {
                setUser(res.data.role)
            }).catch(err => {
                console.log(err)
            })
    });

    const hasRole = (role) => role && user=== role;


    const contextValue = {
        user,
        hasRole
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}