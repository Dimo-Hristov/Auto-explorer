import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as authService from '../services/authService';
import { ErrorContext } from '../contexts/ErrorContext'


export const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {
    const navigate = useNavigate();
    const [auth, setAuth] = useState({});
    const { addErrorMessage } = useContext(ErrorContext)

    useEffect(() => {

        const serializedUser = localStorage.getItem('auth')

        if (serializedUser) {
            const user = JSON.parse(serializedUser);
            setAuth(user);
        }
    }, []);


    const onRegisterSubmit = async (formValues) => {
        const { rePassword, ...data } = formValues;

        try {
            const user = await authService.register(data);
            setAuth(user);

            const serializedUser = JSON.stringify(user)
            localStorage.setItem('auth', serializedUser);

            navigate('/');
        } catch (error) {
            setAuth({})
            addErrorMessage(error.message)
        }
    }

    const onLoginSubmit = async (formValues) => {

        try {
            const response = await authService.login(formValues);


            if (response.code === 403) {
                console.log(response.message);
                addErrorMessage(response.message);
                return
            }

            setAuth(response);

            const serializedUser = JSON.stringify(response)
            localStorage.setItem('auth', serializedUser);

            navigate('/')
        } catch (error) {
            setAuth({})
            addErrorMessage(error.message)
        }
    }

    const onLogout = async () => {

        try {
            await authService.logout(auth.accessToken);
            setAuth({});
            localStorage.clear()
        } catch (error) {
            alert(error.message)
        }
    }



    const contextValues = {
        onRegisterSubmit,
        onLoginSubmit,
        onLogout,
        accessToken: auth.accessToken,
        email: auth.email,
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