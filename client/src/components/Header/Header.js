import headerSyles from './header.module.css';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header className={headerSyles.header}>
            <nav>
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/catalog'}>Catalog</Link></li>
                    <li><Link to={'/publish'}>Publish car</Link></li>
                    <li><Link to={'/profile'}>Profile</Link></li>
                    <li><Link to={'/login'}>Login</Link></li>
                    <li><Link to={'/register'}>Register</Link></li>
                    <li><Link to={'/logout'}>Logout</Link></li>
                </ul>
            </nav>
        </header>
    )
}