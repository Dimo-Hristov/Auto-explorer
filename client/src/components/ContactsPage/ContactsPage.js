import contactsPageStyles from './contactsPage.module.css'

export const ContactsPage = () => {
    return (
        <section >
            <div className={contactsPageStyles.contacts}>
                <h2>Contact Us</h2>
                <p>
                    Have a question or feedback? Feel free to reach out to us using the
                    form below.
                </p>
                <form>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="4" required></textarea>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </section>
    )
}