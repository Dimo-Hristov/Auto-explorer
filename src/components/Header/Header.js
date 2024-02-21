import headerSyles from './header.module.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';
import { ErrorContext } from '../../contexts/ErrorContext';

export const Header = () => {

    const { email } = useContext(AuthContext);

    const { errorMessages } = useContext(ErrorContext);
    return (
        <>
            <header className={headerSyles.header}>
                <nav>
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
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

                </nav>



            </header>

            {errorMessages && (
                <div className={headerSyles.errors}>
                    {errorMessages.map((message, index) => <p className={headerSyles.errorsP} key={`${index}${message}`}>{message}</p>)}
                </div>
            )}
        </>
    )
}