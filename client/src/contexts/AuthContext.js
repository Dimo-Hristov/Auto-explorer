import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as authService from '../services/authService';
import { ErrorContext } from '../contexts/ErrorContext';


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
            const resData = await authService.register(data);
            if (resData.code === 409) {
                return addErrorMessage(resData.message)
            }

            setAuth(resData);

            const serializedUser = JSON.stringify(resData)
            localStorage.setItem('auth', serializedUser);

            navigate('/');
        } catch (error) {
            setAuth({})
            addErrorMessage(error.message)
        }
    }

    const onLoginSubmit = async (formValues) => {

        try {
            const resData = await authService.login(formValues);


            if (resData.code === 403) {
                return addErrorMessage(resData.message);
            }

            setAuth(resData);

            const serializedUser = JSON.stringify(resData)
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
            addErrorMessage(error.message)
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