import footerStyles from './footer.module.css'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <footer className={footerStyles.footer}>
            <p>&copy; 2023 Your Website Name. All rights reserved.</p>

            <nav>
                <ul>
                    <li><Link to={'/'}>Home</Link ></li>
                    <li><Link to={'/about'}>About Us</Link ></li>
                    <li><Link to={'/Contact'}>Contact</Link ></li>
                </ul>
            </nav>
        </footer >

    )
}