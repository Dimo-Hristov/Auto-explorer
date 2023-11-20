import './global.css';
import { Header } from "./components/Header/Header";
import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './components/HomePage/HomePage';
import { CatalogPage } from './components/CatalogPage/CatalogPage';
import { PublishPage } from './components/PublishPage/PublishPage';
import { ProfilePage } from './components/ProfilePage/ProfilePage';
import { LoginPage } from './components/LoginPage/LoginPage';
import { RegisterPage } from './components/RegisterPage/RegisterPage';
import { AuthContext } from './contexts/AuthContext';
import * as authService from './services/authService';
import { passwordValidator } from './validators/passwordValidator';
import { useState } from 'react';

function App() {

    const [auth, setAuth] = useState({});

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
            Navigate('/')
        } catch (error) {
            setAuth({})
            alert(error.message)
        }
    }

    const context = {
        onRegisterSubmit,
        accessToken: auth.accessToken,
        username: auth.username,
        userId: auth._id,
    }

    return (
        <>
            <AuthContext.Provider value={context}>
                <Header />
                <main className="app">
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/catalog' element={<CatalogPage />} />
                        <Route path='/publish' element={<PublishPage />} />
                        <Route path='/profile' element={<ProfilePage />} />
                        <Route path='/login' element={<LoginPage />} />
                        <Route path='/register' element={<RegisterPage />} />
                    </Routes>
                </main>
            </AuthContext.Provider>
        </>
    );
}

export default App;
