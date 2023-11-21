import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { passwordValidator } from "../validators/passwordValidator";
import * as authService from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {
    const navigate = useNavigate();
    const [auth, setAuth] = useState({});

    useEffect(() => {

        const serializedUser = localStorage.getItem('auth')

        if (serializedUser) {
            const user = JSON.parse(serializedUser);
            setAuth(user);
        }
    }, []);


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

            const serializedUser = JSON.stringify(user)
            localStorage.setItem('auth', serializedUser);

            navigate('/');
        } catch (error) {
            setAuth({})
            alert(error.message)
        }
    }

    const onLoginSubmit = async (formValues) => {

        try {
            console.log(formValues);
            const user = await authService.login(formValues);
            setAuth(user);

            const serializedUser = JSON.stringify(user)
            localStorage.setItem('auth', serializedUser);
        } catch (error) {
            setAuth({})
            alert(error.message);
        }
    }



    const contextValues = {
        onRegisterSubmit,
        onLoginSubmit,
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