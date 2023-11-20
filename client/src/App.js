import './global.css';
import { Header } from "./components/Header/Header";
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage/HomePage';
import { CatalogPage } from './components/CatalogPage/CatalogPage';
import { PublishPage } from './components/PublishPage/PublishPage';
import { ProfilePage } from './components/ProfilePage/ProfilePage';
import { LoginPage } from './components/LoginPage/LoginPage';
import { RegisterPage } from './components/RegisterPage/RegisterPage';
import { AuthContext } from './contexts/AuthContext';
import * as authService from './services/authService';
import { passwordValidator } from './validators/passwordValidator';

function App() {

    const onRegisterSubmit = async (formValues) => {
        const { rePassword, ...data } = formValues;

        const passwordMatch = passwordValidator(data.password, rePassword);

        if (!passwordMatch) {
            alert('Password missmatch!');
            return;
        }

        try {
            const user = await authService.register(data);
            console.log(user);
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <>
            <AuthContext.Provider value={{ onRegisterSubmit }}>
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
