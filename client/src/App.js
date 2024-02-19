import './global.css';
import { Header } from "./components/Header/Header";
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './components/Main/HomePage/HomePage';
import { CatalogPage } from './components/Main/CatalogPage/CatalogPage';
import { PublishPage } from './components/Car/PublishPage/PublishPage';
import { ProfilePage } from './components/User/ProfilePage/ProfilePage';
import { LoginPage } from './components/User/LoginPage/LoginPage';
import { RegisterPage } from './components//User/RegisterPage/RegisterPage';
import { AuthProvider } from './contexts/AuthContext';
import { Logout } from './components/User/Logout/Logout';
import { CarProvider } from './contexts/CarContext';
import { Footer } from './components/Footer/Footer/Footer';
import { DetailsPage } from './components/Car/DetailsPage/DetailsPage';
import { EditCar } from './components/Car/EditCar/EditCar';
import { AboutPage } from './components/Footer/AboutPage/AboutPage';
import { ContactsPage } from './components/Footer/ContactsPage/ContactsPage';
import { ErrorHandler } from './contexts/ErrorContext';
import AuthGuard from './components/guards/AuthGuard';
import GuestGuard from './components/guards/GuestGuard';


function App() {
    return (
        <>
            <ErrorHandler>
                <AuthProvider>
                    <Header />
                    <main className="app">
                        <Routes>
                            <Route path='/' element={<CarProvider><HomePage /></CarProvider>} />
                            <Route path='/catalog' element={<CarProvider><CatalogPage /></CarProvider>} />
                            <Route path='/catalog/:carId' element={<CarProvider><DetailsPage /></CarProvider>} />
                            <Route path='/about' element={<AboutPage />}></Route>
                            <Route path='/contact' element={<ContactsPage />}></Route>
                            <Route path='*' element={(<div>
                                <h1>Not Found</h1>
                                <p>Sorry, the page you are looking for does not exist.</p>
                            </div>)} />


                            {/* Authenticated paths */}
                            <Route element={<AuthGuard />}>
                                <Route path='/logout' element={<Logout />} />
                                <Route path='/catalog/:carId/edit' element={<CarProvider><EditCar /></CarProvider>} />
                                <Route path='/publish' element={<CarProvider><PublishPage /></CarProvider>} />
                                <Route path='/profile' element={<CarProvider><ProfilePage /></CarProvider>} />
                            </Route>

                            {/* Guest paths */}
                            <Route element={<GuestGuard />}>
                                <Route path='/login' element={<LoginPage />} />
                                <Route path='/register' element={<RegisterPage />} />
                            </Route>
                        </Routes>
                    </main>
                </AuthProvider>
            </ErrorHandler>
            <Footer />
        </>
    );
}

export default App;
