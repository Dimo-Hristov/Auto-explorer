import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { passwordValidator } from "../validators/passwordValidator";
import * as authService from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {
    const navigate = useNavigate()

    const onRegisterSubmit = async (formValues) => {
        const { rePassword, ...data } = formValues;

        const passwordMatch = passwordValidator(data.password, rePassword);

        if (!passwordMatch) {
            alert('Password missmatch!');
            return;
        }

        try {
            const user = await authService.register(data);
            setAuth(user);
            navigate('/');
        } catch (error) {
            setAuth({})
            alert(error.message)
        }
    }

    const [auth, setAuth] = useState({});

    const contextValues = {
        onRegisterSubmit,
        accessToken: auth.accessToken,
        username: auth.username,
        userId: auth._id,
    }

    return (
        <>
            <AuthContext.Provider value={contextValues}>
                {children}
            </AuthContext.Provider>
        </>
    )
}