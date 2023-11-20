import headerSyles from './header.module.css';

export const Header = () => {
    return (
        <header className={headerSyles.header}>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Catalog</li>
                    <li>Search</li>
                    <li>Profile</li>
                    <li>Login</li>
                    <li>Register</li>
                    <li>Logout</li>
                </ul>
            </nav>
        </header>
    )
}