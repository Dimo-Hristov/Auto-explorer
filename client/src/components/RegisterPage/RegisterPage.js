import registerStyles from './registerPage.module.css'

export const RegisterPage = () => {
    return (
        <section className={registerStyles}>
            <h1>Register form</h1>

            <form >
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" autoComplete="username" />
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" autoComplete="email" />
                <label htmlFor="imageUrl">Image</label>
                <input type="text" name="imageUrl" id="imageUrl" autoComplete="image" />
                <label htmlFor="age">Age</label>
                <input type="number" name="age" id="age" autoComplete="age" />
                <label htmlFor="username">Password</label>
                <input type="password" name="password" id="password" autoComplete="password" />
                <label htmlFor="username">Repeat password</label>
                <input type="password" name="rePassword" id="rePassword" autoComplete="password" />

                <input type="submit" value='Submit' className='submitButton' />
            </form>


        </section>
    )
}