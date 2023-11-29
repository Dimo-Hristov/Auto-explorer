import aboutPageStyles from './aboutPage.module.css'

export const AboutPage = () => {
    return (
        <section className={aboutPageStyles.about}>
            <h2>About Us</h2>
            <p>
                Welcome to our car marketplace! Whether you're looking to buy a car or
                sell your existing one, we've got you covered. Our platform connects
                buyers and sellers, making it easy to find the perfect car or reach a
                wide audience for your listing.
            </p>
            <div className="features">
                <h3>Key Features</h3>
                <ul>
                    <li>Search and browse a diverse selection of cars for sale.</li>
                    <li>Post your car for sale and reach potential buyers.</li>
                    <li>Filter and sort search results based on your preferences.</li>
                    <li>Connect with sellers and negotiate directly within the app.</li>
                    {/* Add more features as needed */}
                </ul>
            </div>
            <p>
                Join our community today and experience a seamless car buying and
                selling journey!
            </p>
        </section>
    )
}