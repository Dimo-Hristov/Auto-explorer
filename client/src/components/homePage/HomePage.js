import homeStyles from './homePage.module.css'

export const HomePage = () => {
    return (
        <section className={homeStyles.home}>
            <h1>Welcome to auto explorer</h1>
            <p>In the list below you can see the most liked cars </p>

            <ul>
                <li>car1</li>
                <li>car12</li>
                <li>car3</li>
                <li>car4</li>
                <li>car5</li>
                <li>car6</li>
            </ul>

        </section>
    )
}