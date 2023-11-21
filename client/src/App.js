import './global.css';
import { Header } from "./components/Header/Header";
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage/HomePage';
import { CatalogPage } from './components/CatalogPage/CatalogPage';
import { PublishPage } from './components/PublishPage/PublishPage';
import { ProfilePage } from './components/ProfilePage/ProfilePage';
import { LoginPage } from './components/LoginPage/LoginPage';
import { RegisterPage } from './components/RegisterPage/RegisterPage';
import { AuthProvider } from './contexts/AuthContext';
import { Logout } from './components/Logout/Logout';


function App() {


    return (
        <>
            <AuthProvider>
                <Header />
                <main className="app">
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/catalog' element={<CatalogPage />} />
                        <Route path='/publish' element={<PublishPage />} />
                        <Route path='/profile' element={<ProfilePage />} />
                        <Route path='/login' element={<LoginPage />} />
                        <Route path='/register' element={<RegisterPage />} />
                        <Route path='/logout' element={<Logout />} />
                    </Routes>
                </main>
            </AuthProvider>
        </>
    );
}

export default App;
