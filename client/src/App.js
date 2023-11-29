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
import { CarProvider } from './contexts/CarContext';
import { Footer } from './components/Footer/Footer';
import { DetailsPage } from './components/DetailsPage/DetailsPage';
import { EditCar } from './components/EditCar/EditCar';
import { AboutPage } from './components/AboutPage/AboutPage';


function App() {


    return (
        <>
            <AuthProvider>
                <Header />
                <main className="app">
                    <Routes>
                        <Route path='/' element={<CarProvider><HomePage /></CarProvider>} />
                        <Route path='/catalog' element={<CarProvider><CatalogPage /></CarProvider>} />
                        <Route path='/catalog/:carId' element={<CarProvider><DetailsPage /></CarProvider>} />
                        <Route path='/catalog/:carId/edit' element={<CarProvider><EditCar /></CarProvider>} />
                        <Route path='/publish' element={<CarProvider><PublishPage /></CarProvider>} />
                        <Route path='/profile' element={<CarProvider><ProfilePage /></CarProvider>} />
                        <Route path='/login' element={<LoginPage />} />
                        <Route path='/register' element={<RegisterPage />} />
                        <Route path='/logout' element={<Logout />} />
                        <Route path='/about' element={<AboutPage />}></Route>
                        <Route path='*' element={(<div>
                            <h1>Not Found</h1>
                            <p>Sorry, the page you are looking for does not exist.</p>
                        </div>)} />
                    </Routes>
                </main>
            </AuthProvider>
            <Footer />
        </>
    );
}

export default App;
