import headerSyles from './header.module.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext, useState } from 'react';
import { ErrorContext } from '../../contexts/ErrorContext';

export const Header = () => {

    const { email } = useContext(AuthContext);
    const { errorMessages } = useContext(ErrorContext);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <>
            <header className={headerSyles.header}>
                <nav onClick={toggleMenu}>
                    <ul className={` ${isMenuOpen ? headerSyles.open : ''}`} >
                        <li><Link to={'/home'}>Home</Link></li>
                        <li><Link to={'/catalog'}>Catalog</Link></li>

                        {email ? (
                            <>
                                <li><Link to={'/publish'}>Publish car</Link></li>
                                <li><Link to={'/profile'}>Profile</Link></li>
                                <li><Link to={'/logout'}>Logout</Link></li>
                            </>
                        ) : (
                            <>
                                <li><Link to={'/login'}>Login</Link></li>
                                <li><Link to={'/register'}>Register</Link></li>
                            </>
                        )}


                    </ul>
                    {email && (
                        <p className='user-email'>Hello {email}</p>
                    )}

                    <div className={`${headerSyles.hamburger} ${isMenuOpen ? headerSyles.open : ''}`} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                </nav>



            </header >

            {errorMessages && (
                <div className={headerSyles.errors}>
                    {errorMessages.map((message, index) => <p className={headerSyles.errorsP} key={`${index}${message}`}>{message}</p>)}
                </div>
            )
            }
        </>
    )
}