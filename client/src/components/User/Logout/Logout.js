import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";

export const Logout = () => {

    const { setAuth } = useContext(AuthContext)

    localStorage.clear();
    setAuth({})

    return <Navigate to="/" />

}