import footerStyles from './footer.module.css'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <footer className={footerStyles.footer}>
            <p>&copy; 2023 Auto-explorer. All rights reserved.</p>

            <nav>
                <ul>
                    <li><Link to={'/home'}>Home</Link ></li>
                    <li><Link to={'/about'}>About Us</Link ></li>
                    <li><Link to={'/Contact'}>Contact</Link ></li>
                </ul>
            </nav>
        </footer >

    )
}